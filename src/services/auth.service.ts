import bcrypt from "bcryptjs";
import { User } from "../models/User";
import { signToken } from "../utils/jwt";

export interface RegisterInput {
  nom: string;
  prenom: string;
  email: string;
  motDePasse: string;
}

export interface LoginInput {
  email: string;
  motDePasse: string;
}

export class AuthService {
  static async register(input: RegisterInput) {
    const existing = await User.findOne({ where: { email: input.email } });
    if (existing) {
      throw new Error("Un compte existe déjà avec cet email.");
    }

    const hashedPassword = await bcrypt.hash(input.motDePasse, 10);

    const user = await User.create({
      nom: input.nom,
      prenom: input.prenom,
      email: input.email,
      motDePasse: hashedPassword,
    });

    const token = signToken({ id: user.id, email: user.email, role: user.role });

    return { user: user.toSafeJSON(), token };
  }

  static async login(input: LoginInput) {
    const user = await User.findOne({ where: { email: input.email } });
    if (!user) {
      throw new Error("Email ou mot de passe incorrect.");
    }

    const passwordValide = await bcrypt.compare(input.motDePasse, user.motDePasse);
    if (!passwordValide) {
      throw new Error("Email ou mot de passe incorrect.");
    }

    const token = signToken({ id: user.id, email: user.email, role: user.role });

    return { user: user.toSafeJSON(), token };
  }
}
