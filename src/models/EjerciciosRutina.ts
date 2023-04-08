import { DataTypes } from "sequelize";
import { sequelize } from "../database/dbConfig";

export const EjerciciosRutina = sequelize.define("EjerciciosRutina", {
  idEjerciciosRutina: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  seriesEsperadas: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  repeticionesEsperadas: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});
