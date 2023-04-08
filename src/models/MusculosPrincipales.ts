import { DataTypes } from "sequelize";
import { sequelize } from "../database/dbConfig";

export const MusculosPrincipales = sequelize.define("MusculosPrincipales", {
  idMusculoPrincipal: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});
