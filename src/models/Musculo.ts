import { DataTypes } from "sequelize";
import { sequelize } from "../database/dbConfig";

export const Musculo = sequelize.define("Musculo", {
  idMusculo: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});
