
import express from "express";
import Suggestion from "../models/Suggestion.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const { query } = req.query;
  if (!query) return res.json([]);

  try {
    const regex = new RegExp(query, "i");
    const suggestions = await Suggestion.find({
      keyword: { $regex: regex },
    }).limit(4);
    res.json(suggestions);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch suggestions" });
  }
});

export default router;
