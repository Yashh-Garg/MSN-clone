import mongoose from "mongoose";

const iconSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const Icon = mongoose.model("Icon", iconSchema);

export default Icon;
