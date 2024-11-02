const { dbConnection } = require("../config/db");
const { DataTypes } = require("sequelize");

// Definición de los modelos
const Materia = dbConnection.define("Materia", {
  nombre: DataTypes.STRING,
});

const Alumno = dbConnection.define("Alumno", {
  nombre: DataTypes.STRING,
  apellido: DataTypes.STRING,
});

const Nota = dbConnection.define("Nota", {
  valor: DataTypes.INTEGER,
});

// Definición de asociaciones
Materia.hasMany(Nota);
Nota.belongsTo(Materia);

Alumno.hasMany(Nota);
Nota.belongsTo(Alumno);

// Sincronizar los modelos en orden
dbConnection.sync({ alter: true }).then(() => {
  console.log("Modelos sincronizados");
});

// Exportar los modelos
module.exports = {
  Materia,
  Alumno,
  Nota,
};