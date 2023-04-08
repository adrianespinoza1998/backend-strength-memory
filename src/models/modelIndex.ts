import { DetalleEjerciciosRutina } from "./DetalleEjerciciosRutina";
import { DetalleSeriesEjercicios } from "./DetalleSeriesEjercicios";
import { Ejercicio } from "./Ejercicio";
import { EjerciciosRutina } from "./EjerciciosRutina";
import { Musculo } from "./Musculo";
import { MusculosPrincipales } from "./MusculosPrincipales";
import { Rol } from "./Rol";
import { Rutina } from "./Rutina";
import { Usuario } from "./Usuario";

Usuario.belongsTo(Rol, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
  hooks: true,
  foreignKey: {
    name: "idRol",
    allowNull: false,
  },
});

Rutina.belongsTo(Usuario, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
  hooks: true,
  foreignKey: {
    name: "idUsuario",
    allowNull: false,
  },
});

MusculosPrincipales.belongsTo(Ejercicio, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
  hooks: true,
  foreignKey: {
    name: "idEjercicio",
    allowNull: false,
  },
});

MusculosPrincipales.belongsTo(Musculo, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
  hooks: true,
  foreignKey: {
    name: "idMusculo",
    allowNull: false,
  },
});

EjerciciosRutina.belongsTo(Rutina, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
  hooks: true,
  foreignKey: {
    name: "idRutina",
    allowNull: false,
  },
});

EjerciciosRutina.belongsTo(Ejercicio, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
  hooks: true,
  foreignKey: {
    name: "idEjercicio",
    allowNull: false,
  },
});

DetalleEjerciciosRutina.belongsTo(EjerciciosRutina, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
  hooks: true,
  foreignKey: {
    name: "idEjerciciosRutina",
    allowNull: false,
  },
});

DetalleSeriesEjercicios.belongsTo(DetalleEjerciciosRutina, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
  hooks: true,
  foreignKey: {
    name: "idDetalleEjerciciosRutina",
    allowNull: false,
  },
});

export {
  Rol,
  Usuario,
  Rutina,
  Ejercicio,
  Musculo,
  MusculosPrincipales,
  EjerciciosRutina,
  DetalleEjerciciosRutina,
  DetalleSeriesEjercicios,
};
