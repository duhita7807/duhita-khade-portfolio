import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { connectDB } from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";
import { notFound } from "./middleware/notFound.js";
import { errorHandler } from "./middleware/errorHandler.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const clientOrigin = process.env.CLIENT_ORIGIN || "http://localhost:5173";

await connectDB();

app.use(
  helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" },
  })
);

app.use(
  cors({
    origin: clientOrigin,
    methods: ["GET", "POST"],
  })
);

app.use(express.json({ limit: "10kb" }));

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many messages sent. Please try again later.",
  },
});

app.get("/api/health", (req, res) => {
  res.json({ success: true, status: "ok" });
});

app.use("/api/contact", contactLimiter, contactRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
