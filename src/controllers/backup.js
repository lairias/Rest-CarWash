//Importacion de la base de datos
const mysqlConect = require("../config/database.js");

const { copia } = require("../config/Mysqldump");
const { Import } = require("../config/MysqlImport");

exports.Backup = async (req, res, next) => {
  try {
    copia();
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.Importacion = async (req, res, next) => {
  const { id } = req.params;
  try {
    Import(id);
  
  } catch (error) {
    console.log(error);
    next();
  }
};
