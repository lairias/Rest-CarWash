const mysql = require("mysql");

require("dotenv").config();

const conexion = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
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
