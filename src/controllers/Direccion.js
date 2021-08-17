//Importacion de la base de datos
const mysqlConect = require("../config/database.js");

exports.DireccionPersona = async (req, res, next) => {
  const { id } = req.params;
  try {
    await mysqlConect.query(
      `SELECT * from users U INNER JOIN TBL_PE_DIRECCION PD INNER JOIN TBL_DIR_PER DP ON DP.COD_DIRECCION = PD.COD_DIRECCION AND U.id = DP.id_people WHERE U.id= ${id}`,
      (err, rows, fields) => {
        console.log(rows);
        res.send(rows);
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
exports.Direcciones= async (req, res, next) => {
  try {
    await mysqlConect.query(
      `SELECT * from users U INNER JOIN TBL_PE_DIRECCION PD INNER JOIN TBL_DIR_PER DP ON DP.COD_DIRECCION = PD.COD_DIRECCION AND U.id = DP.id_people `,
      (err, rows, fields) => {
        console.log(rows);
        res.send(rows);
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
