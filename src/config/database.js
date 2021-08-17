const mysql = require("mysql");

require("dotenv").config();

const conexion = mysql.createConnection({
  host: "142.44.161.115",
  user: "CarWash",
  password: "CarWash#$%895#",
  database: "SI-CarWash",
});

conexion.connect((error) => {
  if (error) {
    console.log(error);
    return;
  } else {
    console.log("conectado a la base de datos");
  }
});

module.exports = conexion;
