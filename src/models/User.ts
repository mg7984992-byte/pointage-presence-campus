import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/database";

export type UserRole = "admin" | "membre";

export interface UserAttributes {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  motDePasse: string;
  role: UserRole;
  createdAt?: Date;
  updatedAt?: Date;
}

// Champs optionnels à la création (générés automatiquement)
export type UserCreationAttributes = Optional<UserAttributes, "id" | "role" | "createdAt" | "updatedAt">;

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public nom!: string;
  public prenom!: string;
  public email!: string;
  public motDePasse!: string;
  public role!: UserRole;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // Ne jamais renvoyer le mot de passe au client
  public toSafeJSON() {
    const { id, nom, prenom, email, role, createdAt, updatedAt } = this;
    return { id, nom, prenom, email, role, createdAt, updatedAt };
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    nom: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    prenom: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: true,
      validate: { isEmail: true },
    },
    motDePasse: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("admin", "membre"),
      allowNull: false,
      defaultValue: "membre",
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
    timestamps: true,
  }
);
