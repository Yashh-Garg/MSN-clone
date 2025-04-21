import mongoose from "mongoose";

const suggestionSchema = new mongoose.Schema({
  keyword: String,
});

const Suggestion = mongoose.model("Suggestion", suggestionSchema);
export default Suggestion;
