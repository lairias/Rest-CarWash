//Importacion de la base de datos
const mysqlConect = require("../config/database.js");

exports.TelefonoPersona = async (req, res, next) => {
    const {id}=req.params;
  try {
    await mysqlConect.query(
      `SELECT * from users U INNER JOIN TBL_PE_TELEFONO PT INNER JOIN TBL_TEL_PER TP ON PT.COD_TELEFONO = TP.COD_TELEFONO AND U.id = TP.id_people WHERE U.id = ${id}`,
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
exports.Telefonos = async (req, res, next) => {
  try {
    await mysqlConect.query(
      `SELECT * from users U INNER JOIN TBL_PE_TELEFONO PT INNER JOIN TBL_TEL_PER TP ON PT.COD_TELEFONO = TP.COD_TELEFONO AND U.id = TP.id_people`,
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
