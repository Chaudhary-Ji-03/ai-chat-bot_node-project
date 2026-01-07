const express = require("express");
const router = express.Router();
const { addSampleArticles } = require("../controllers/articleController");

router.post("/add-sample-articles", addSampleArticles);

module.exports = router;
