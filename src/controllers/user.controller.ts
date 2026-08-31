import { Response } from "express";
import { UserService } from "../services/user.service";
import { AuthRequest } from "../middlewares/auth.middleware";

export class UserController {
  static async getAll(_req: AuthRequest, res: Response) {
    const users = await UserService.findAll();
    return res.json(users);
  }

  static async getOne(req: AuthRequest, res: Response) {
    const user = await UserService.findById(Number(req.params.id));
    if (!user) return res.status(404).json({ message: "Utilisateur introuvable." });
    return res.json(user);
  }

  static async getMe(req: AuthRequest, res: Response) {
    const user = await UserService.findById(req.user!.id);
    return res.json(user);
  }

  static async update(req: AuthRequest, res: Response) {
    try {
      const user = await UserService.update(Number(req.params.id), req.body);
      return res.json(user);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  static async remove(req: AuthRequest, res: Response) {
    try {
      await UserService.remove(Number(req.params.id));
      return res.status(204).send();
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }
}
