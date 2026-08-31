import { Response } from "express";
import { PointageService } from "../services/pointage.service";
import { AuthRequest } from "../middlewares/auth.middleware";

export class PointageController {
  static async createSession(req: AuthRequest, res: Response) {
    try {
      const { titre, description, dateDebut } = req.body;
      if (!titre) return res.status(400).json({ message: "Le titre est requis." });

      const session = await PointageService.createSession({
        titre,
        description,
        dateDebut: dateDebut ? new Date(dateDebut) : undefined,
        createurId: req.user!.id,
      });
      return res.status(201).json(session);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  static async listSessions(_req: AuthRequest, res: Response) {
    const sessions = await PointageService.listSessions();
    return res.json(sessions);
  }

  static async getSession(req: AuthRequest, res: Response) {
    try {
      const session = await PointageService.getSessionById(Number(req.params.id));
      return res.json(session);
    } catch (error: any) {
      return res.status(404).json({ message: error.message });
    }
  }

  static async closeSession(req: AuthRequest, res: Response) {
    try {
      const session = await PointageService.closeSession(Number(req.params.id));
      return res.json(session);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  static async pointerArrivee(req: AuthRequest, res: Response) {
    try {
      const presence = await PointageService.pointerArrivee(Number(req.params.id), req.user!.id);
      return res.status(201).json(presence);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  static async pointerDepart(req: AuthRequest, res: Response) {
    try {
      const presence = await PointageService.pointerDepart(Number(req.params.id), req.user!.id);
      return res.json(presence);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  static async listPresencesBySession(req: AuthRequest, res: Response) {
    const presences = await PointageService.listPresencesBySession(Number(req.params.id));
    return res.json(presences);
  }

  static async mesPresences(req: AuthRequest, res: Response) {
    const presences = await PointageService.listPresencesByUser(req.user!.id);
    return res.json(presences);
  }
}
