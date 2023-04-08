import { DataTypes } from "sequelize";
import { sequelize } from "../database/dbConfig";

export const DetalleEjerciciosRutina = sequelize.define(
  "DetalleEjerciciosRutina",
  {
    idDetalleEjerciciosRutina: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    dia: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  }
);
