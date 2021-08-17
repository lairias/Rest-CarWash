//Importacion de la base de datos
const mysqlConect = require("../config/database.js");

exports.Imagen = async (req, res, next) => {
  const { id } = req.params;
  try {
    await mysqlConect.query(
      `SELECT * FROM TBL_IMG_HOME WHERE COD_IMG = '${id}'`,
      (err, rows, fields) => {
        res.send(rows);
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
exports.Imagenes = async (req, res, next) => {
  try {
    await mysqlConect.query(
      `SELECT * FROM TBL_IMG_HOME`,
      (err, rows, fields) => {
        res.send(rows);
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
exports.UpdateImaagen = async (req, res, next) => {
    const {id} = req.params;
    const{IMG,NOM_IMG,DES_IMG} = req.body;
  try {
    await mysqlConect.query(
      `UPDATE TBL_IMG_HOME SET IMG='${IMG}',NOM_IMG='${NOM_IMG}',DES_IMG='${DES_IMG}' WHERE COD_IMG='${id}'`,
      (err, rows, fields) => {
        res.send("Actualizado");
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
