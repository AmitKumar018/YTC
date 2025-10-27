import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { urlencoded } from "express";
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "10mb" }));
app.use(urlencoded({ extended: true }, { limit: "10mb" }));
app.use(cookieParser());
app.use(express.static("public"));
export default app;
