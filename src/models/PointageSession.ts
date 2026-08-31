import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/database";

export type SessionStatut = "ouverte" | "fermee";

export interface PointageSessionAttributes {
  id: number;
  titre: string;
  description?: string | null;
  dateDebut: Date;
  dateFin?: Date | null;
  statut: SessionStatut;
  createurId: number; // FK -> users.id
  createdAt?: Date;
  updatedAt?: Date;
}

export type PointageSessionCreationAttributes = Optional<
  PointageSessionAttributes,
  "id" | "description" | "dateFin" | "statut" | "createdAt" | "updatedAt"
>;

export class PointageSession
  extends Model<PointageSessionAttributes, PointageSessionCreationAttributes>
  implements PointageSessionAttributes
{
  public id!: number;
  public titre!: string;
  public description!: string | null;
  public dateDebut!: Date;
  public dateFin!: Date | null;
  public statut!: SessionStatut;
  public createurId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

PointageSession.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    titre: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    dateDebut: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    dateFin: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    statut: {
      type: DataTypes.ENUM("ouverte", "fermee"),
      allowNull: false,
      defaultValue: "ouverte",
    },
    createurId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: { model: "users", key: "id" },
    },
  },
  {
    sequelize,
    modelName: "PointageSession",
    tableName: "pointage_sessions",
    timestamps: true,
  }
);
