//Importacion de la base de datos
const mysqlConect = require("../config/database.js");

exports.Segurida = async (req, res, next) => {

  const {id} = req.params;
  try {
    await mysqlConect.query(
      `SELECT DES_SEGURIDAD FROM TBL_SEGURIDAD WHERE COD_SEGURIDAD = '${id}'`,
      (err, rows, fields) => {
        res.send(rows);
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
exports.Seguridad = async (req, res, next) => {
  try {
    await mysqlConect.query(
      `SELECT * FROM TBL_SEGURIDAD`,
      (err, rows, fields) => {
        res.send(rows);
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
exports.NuevaSeguridad = async (req, res, next) => {
  const { DAT_SEGURIDAD, DES_SEGURIDAD } = req.body;

  try {
    await mysqlConect.query(
      "CALL `INS_SEGURIDAD`" +
        `('${DAT_SEGURIDAD}',
        '${DES_SEGURIDAD}')`,
      (err, rows, fields) => {
        res.send("CREADO");
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
exports.UpdateSeguridad = async (req, res, next) => {
  const { DAT_SEGURIDAD, DES_SEGURIDAD } = req.body;
  const { id } = req.params;

  try {
    await mysqlConect.query(
      "CALL `UPD_SEGURIDAD`" +
        `('${DAT_SEGURIDAD}',
        '${DES_SEGURIDAD}',,
        '${id}')`,
      (err, rows, fields) => {
        res.send("ACTUALIZADO");
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.DELETESeguridad = async (req, res, next) => {
  const { id } = req.params;

  try {
    await mysqlConect.query(
      `DELETE FROM 'TBL_SEGURIDAD' WHERE COD_SEGURIDAD =  '${id}')`,
      (err, rows, fields) => {
        res.send("Eliminado");
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
