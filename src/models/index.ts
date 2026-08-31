import { sequelize } from "../config/database";
import { User } from "./User";
import { PointageSession } from "./PointageSession";
import { Presence } from "./Presence";

// --- Associations ---

// Un utilisateur peut créer plusieurs sessions de pointage
User.hasMany(PointageSession, { foreignKey: "createurId", as: "sessionsCreees" });
PointageSession.belongsTo(User, { foreignKey: "createurId", as: "createur" });

// Une session a plusieurs présences, une présence appartient à une session
PointageSession.hasMany(Presence, { foreignKey: "sessionId", as: "presences", onDelete: "CASCADE" });
Presence.belongsTo(PointageSession, { foreignKey: "sessionId", as: "session" });

// Un utilisateur a plusieurs présences (une par session), une présence appartient à un utilisateur
User.hasMany(Presence, { foreignKey: "userId", as: "presences" });
Presence.belongsTo(User, { foreignKey: "userId", as: "utilisateur" });

export { sequelize, User, PointageSession, Presence };
