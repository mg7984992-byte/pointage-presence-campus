import { User, UserCreationAttributes } from "../models/User";

export class UserService {
  static async findAll() {
    const users = await User.findAll({ attributes: { exclude: ["motDePasse"] } });
    return users;
  }

  static async findById(id: number) {
    return User.findByPk(id, { attributes: { exclude: ["motDePasse"] } });
  }

  static async findByEmail(email: string) {
    // ici on garde le mot de passe : utilisé en interne pour l'auth
    return User.findOne({ where: { email } });
  }

  static async create(data: UserCreationAttributes) {
    const existing = await User.findOne({ where: { email: data.email } });
    if (existing) {
      throw new Error("Un utilisateur avec cet email existe déjà.");
    }
    const user = await User.create(data);
    return user;
  }

  static async update(id: number, data: Partial<UserCreationAttributes>) {
    const user = await User.findByPk(id);
    if (!user) throw new Error("Utilisateur introuvable.");
    await user.update(data);
    return user;
  }

  static async remove(id: number) {
    const user = await User.findByPk(id);
    if (!user) throw new Error("Utilisateur introuvable.");
    await user.destroy();
    return true;
  }
}
