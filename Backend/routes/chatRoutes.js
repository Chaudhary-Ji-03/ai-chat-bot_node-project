const express = require("express");
const router = express.Router();
const { chatWithAI, getHistory } = require("../controllers/chatController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, chatWithAI);
router.get("/history", protect, getHistory);

module.exports = router;
