import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";

export class AuthController {
  static async register(req: Request, res: Response) {
    try {
      const { nom, prenom, email, motDePasse } = req.body;

      if (!nom || !prenom || !email || !motDePasse) {
        return res.status(400).json({ message: "Tous les champs sont requis." });
      }
      if (motDePasse.length < 6) {
        return res.status(400).json({ message: "Le mot de passe doit contenir au moins 6 caractères." });
      }

      const result = await AuthService.register({ nom, prenom, email, motDePasse });
      return res.status(201).json(result);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const { email, motDePasse } = req.body;

      if (!email || !motDePasse) {
        return res.status(400).json({ message: "Email et mot de passe requis." });
      }

      const result = await AuthService.login({ email, motDePasse });
      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(401).json({ message: error.message });
    }
  }
}
