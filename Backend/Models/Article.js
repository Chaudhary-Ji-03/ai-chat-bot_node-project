const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  tags: [String],
}, { timestamps: true });

articleSchema.index({ title: "text", content: "text" });

module.exports = mongoose.model("Article", articleSchema);
