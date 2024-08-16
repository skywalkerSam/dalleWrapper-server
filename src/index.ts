import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { getImageUrl } from "./controllers/test.js";
import { generateImage } from "./controllers/generate.js";

const PORT: number | string = process.env.PORT || 8080;

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json("Welcome to the Image Generation API...");
});
app.post("/test", (req, res) => {
  getImageUrl(req, res);
});
app.post("/generate", (req, res) => {
  generateImage(req, res);
});

app.listen(PORT, () => {
  console.log(`\n\nServer running on http://localhost:${PORT}/\n`);
});

// .env
// PORT, OPENAI

// npm run build ; node .
