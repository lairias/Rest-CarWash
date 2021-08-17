//Importacion de la base de datos
const mysqlConect = require("../config/database.js");

exports.Bitacoras = async (req, res, next) => {
  try {
    await mysqlConect.query(
      `SELECT * FROM TBL_BITACORA`,
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
exports.Bitacora = async (req, res, next) => {
  const { id } = req.params;
  try {
    await mysqlConect.query(
      `SELECT * FROM TBL_BITACORA WHERE id_people = ${id} ORDER BY CREATE_AP DESC   `,
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
exports.DeleteBitacora = async (req, res, next) => {
  const { id } = req.params;
  try {
    await mysqlConect.query(
      `DELETE * FROM TBL_BITACORA WHERE id_people = ${id}  `,
      (err, rows, fields) => {
        console.log("Eliminado");
        res.send(rows);
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
exports.NuevoBitacoras = async (req, res, next) => {
  const { ID_PERSONA, ACCION, DES_BITACORA,Icono } = req.body;
  try {
    await mysqlConect.query(
      "CALL `INS_BITACORA`" +
        `('${ID_PERSONA}',
        '${ACCION}',
        '${DES_BITACORA}',
        '${Icono}')`,
      (err, rows, fields) => {
        res.send("AGREGADO");
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
