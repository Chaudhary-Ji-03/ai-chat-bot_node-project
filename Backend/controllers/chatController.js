const { GoogleGenAI } = require("@google/genai");
const Article = require("../models/Article.js");
const ChatHistory = require("../models/chatHistory.js");

// Gemini client (API key automatically .env se lega)
const ai = new GoogleGenAI({});

// 🔹 Chat with AI (concise answers)
const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;
    const userId = req.user._id;

    // 1️⃣ Optional: fetch KB content (if you want KB grounding)
    const articles = await Article.find().limit(5); // temporarily all articles
    // const kbContent = articles.map(a => a.content).join("\n\n");

    // 2️⃣ Prompt with concise instruction
    const prompt =`Answer concisely in 2–3 sentences: ${message}`;

    // 3️⃣ Gemini call
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }]
        }
      ]
    });

    // 4️⃣ Get text and optionally limit lines
    let answer = response.text.split("\n").slice(0, 5).join(" ");

    // 5️⃣ Save chat history
    let history = await ChatHistory.findOne({ user: userId });
    if (!history) {
      history = await ChatHistory.create({ user: userId, messages: [] });
    }

    history.messages.push({ sender: "user", message });
    history.messages.push({ sender: "bot", message: answer });
    await history.save();

    res.json({ answer });

  } catch (error) {
    console.error("Gemini Error:", error);
    res.status(500).json({ error: "Gemini AI response failed" });
  }
};

// 🔹 Get chat history
const getHistory = async (req, res) => {
  try {
    const history = await ChatHistory.findOne({ user: req.user._id });
    res.json({ messages: history ? history.messages : [] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Export
module.exports = { chatWithAI, getHistory };
