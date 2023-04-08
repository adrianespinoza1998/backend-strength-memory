import { DataTypes } from "sequelize";
import { sequelize } from "../database/dbConfig";

export const DetalleSeriesEjercicios = sequelize.define(
  "DetalleSeriesEjercicios",
  {
    idDetalleSeriesEjercicios: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    seriesRealizadas: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  }
);
