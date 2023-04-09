import { DataTypes } from "sequelize";
import { sequelize } from "../database/dbConfig";

export const Ejercicio = sequelize.define("Ejercicio", {
  idEjercicio: {
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
  video: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});
