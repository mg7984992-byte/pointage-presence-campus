import { PointageSession } from "../models/PointageSession";
import { Presence } from "../models/Presence";
import { User } from "../models/User";

export interface CreateSessionInput {
  titre: string;
  description?: string;
  dateDebut?: Date;
  createurId: number;
}

export class PointageService {
  // --- Sessions ---

  static async createSession(input: CreateSessionInput) {
    return PointageSession.create({
      titre: input.titre,
      description: input.description ?? null,
      dateDebut: input.dateDebut ?? new Date(),
      createurId: input.createurId,
    });
  }

  static async listSessions() {
    return PointageSession.findAll({
      include: [
        { model: User, as: "createur", attributes: ["id", "nom", "prenom"] },
        { model: Presence, as: "presences" },
      ],
      order: [["dateDebut", "DESC"]],
    });
  }

  static async getSessionById(id: number) {
    const session = await PointageSession.findByPk(id, {
      include: [
        { model: User, as: "createur", attributes: ["id", "nom", "prenom"] },
        {
          model: Presence,
          as: "presences",
          include: [{ model: User, as: "utilisateur", attributes: ["id", "nom", "prenom", "email"] }],
        },
      ],
    });
    if (!session) throw new Error("Session de pointage introuvable.");
    return session;
  }

  static async closeSession(id: number) {
    const session = await PointageSession.findByPk(id);
    if (!session) throw new Error("Session de pointage introuvable.");
    await session.update({ statut: "fermee", dateFin: new Date() });
    return session;
  }

  // --- Présences (pointage individuel) ---

  // L'utilisateur "pointe" son arrivée sur une session
  static async pointerArrivee(sessionId: number, userId: number) {
    const session = await PointageSession.findByPk(sessionId);
    if (!session) throw new Error("Session de pointage introuvable.");
    if (session.statut === "fermee") throw new Error("Cette session est fermée.");

    const [presence] = await Presence.findOrCreate({
      where: { sessionId, userId },
      defaults: { sessionId, userId, heureArrivee: new Date(), statut: "present" },
    });

    if (!presence.heureArrivee) {
      await presence.update({ heureArrivee: new Date(), statut: "present" });
    }

    return presence;
  }

  // L'utilisateur "pointe" son départ
  static async pointerDepart(sessionId: number, userId: number) {
    const presence = await Presence.findOne({ where: { sessionId, userId } });
    if (!presence) throw new Error("Aucun pointage d'arrivée trouvé pour cette session.");

    await presence.update({ heureDepart: new Date() });
    return presence;
  }

  static async listPresencesBySession(sessionId: number) {
    return Presence.findAll({
      where: { sessionId },
      include: [{ model: User, as: "utilisateur", attributes: ["id", "nom", "prenom", "email"] }],
    });
  }

  static async listPresencesByUser(userId: number) {
    return Presence.findAll({
      where: { userId },
      include: [{ model: PointageSession, as: "session" }],
    });
  }
}
