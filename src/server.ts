import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import { sequelize, testConnection } from "./config/database";
import "./models"; // charge les modèles + associations

const PORT = process.env.PORT || 4000;

const start = async () => {
  await testConnection();

  // Crée/synchronise les tables à partir des modèles (utile en développement)
  await sequelize.sync({ alter: true });
  console.log("✅ Tables synchronisées avec la base de données.");

  app.listen(PORT, () => {
    console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
  });
};

start();
