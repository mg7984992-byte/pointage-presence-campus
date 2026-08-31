import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/database";

export type PresenceStatut = "present" | "retard" | "absent";

export interface PresenceAttributes {
  id: number;
  sessionId: number; // FK -> pointage_sessions.id
  userId: number; // FK -> users.id
  heureArrivee?: Date | null;
  heureDepart?: Date | null;
  statut: PresenceStatut;
  createdAt?: Date;
  updatedAt?: Date;
}

export type PresenceCreationAttributes = Optional<
  PresenceAttributes,
  "id" | "heureArrivee" | "heureDepart" | "statut" | "createdAt" | "updatedAt"
>;

export class Presence
  extends Model<PresenceAttributes, PresenceCreationAttributes>
  implements PresenceAttributes
{
  public id!: number;
  public sessionId!: number;
  public userId!: number;
  public heureArrivee!: Date | null;
  public heureDepart!: Date | null;
  public statut!: PresenceStatut;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // Durée en minutes, calculée si arrivée + départ connus
  public getDureeMinutes(): number | null {
    if (!this.heureArrivee || !this.heureDepart) return null;
    return Math.round(
      (new Date(this.heureDepart).getTime() - new Date(this.heureArrivee).getTime()) / 60000
    );
  }
}

Presence.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    sessionId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: { model: "pointage_sessions", key: "id" },
    },
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: { model: "users", key: "id" },
    },
    heureArrivee: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    heureDepart: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    statut: {
      type: DataTypes.ENUM("present", "retard", "absent"),
      allowNull: false,
      defaultValue: "present",
    },
  },
  {
    sequelize,
    modelName: "Presence",
    tableName: "presences",
    timestamps: true,
    indexes: [
      // un utilisateur ne peut avoir qu'un seul enregistrement de présence par session
      { unique: true, fields: ["session_id", "user_id"] },
    ],
  }
);
