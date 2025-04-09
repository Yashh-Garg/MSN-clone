import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import weatherRoutes from "./routes/weather.js";
import iconRoutes from "./routes/iconRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/icons", iconRoutes);
app.use("/api/weather", weatherRoutes);
app.get("/ping", (req, res) => {
  res.send("Server is alive!");
});

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log(err));
