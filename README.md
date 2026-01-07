# AI-Powered Personalized Learning Path Platform

A full-stack platform that generates **custom learning roadmaps** using skill assessments and AI recommendations. Users complete quizzes, receive an AI-generated learning path, visualize progress, and track completed topics.

---

## ✨ Key Features

- **Skill Assessments**: React-based quizzes (JavaScript, Databases, etc.)
- **AI Recommendations**: OpenAI / Claude analyzes results and suggests next topics & resources
- **Learning Roadmap**: Interactive DAG visualization using D3.js
- **Progress Tracking**: Mark topics as completed and monitor learning progress
- **PDF Export**: Download personalized learning roadmap

---

## 🛠️ Tech Stack

**Frontend:** React.js, D3.js  
**Backend:** Node.js, Express.js  
**Database:** MongoDB, Mongoose  
**AI:** OpenAI API or Claude API  

---

## 🧱 Architecture Overview

React (Quizzes, Roadmap, Progress)
↓
Node.js / Express API
↓
MongoDB (User Profiles, Assessments, Progress)
↓
OpenAI / Claude (Learning Recommendations)

yaml
Copy code

---

## 📁 Project Structure

client/ → React app
server/ → Node.js & Express API
docs/ → Sample PDF roadmap

yaml
Copy code

---

## ⚙️ Setup Instructions

### 1. Clone Repository
```bash
git clone https://github.com/Chaudhary-Ji-03/ai-chat-bot_node-project.git
2. Install Dependencies
bash
Copy code
# Backend
cd server && npm install

# Frontend
cd ../client && npm install
3. Environment Variables
Create .env in server/:

env
Copy code
PORT=5000
MONGO_URI=mongodb://localhost:27017/learning-platform
OPENAI_API_KEY=your_api_key
4. Run Application
bash
Copy code
# Backend
cd server && npm run dev

# Frontend
cd client && npm start
App runs at: http://localhost:3000

👤 Demo Account
graphql
Copy code
Email: demo@learningpath.ai
Password: Demo@123
Includes a sample assessment and AI-generated learning path.

📄 PDF Export
Users can export their personalized learning roadmap (topics + progress) as a PDF from the roadmap page.

🚀 Future Improvements
OAuth authentication

Gamification & badges

Admin dashboard

Deployment with Docker / Cloud

📜 License
MIT License

yaml
Copy code

---

If you want, I can also:
- Optimize this README for **resume shortlisting**
- Add **GitHub badges**
- Write a **1-page project description** for portfolios or hackathons
