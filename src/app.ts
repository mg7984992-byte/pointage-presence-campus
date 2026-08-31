import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import pointageRoutes from "./routes/pointage.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => res.json({ status: "ok" }));

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/pointage", pointageRoutes);

// 404
app.use((_req, res) => {
  res.status(404).json({ message: "Route introuvable." });
});

export default app;
