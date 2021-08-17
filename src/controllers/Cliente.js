//Importacion de la base de datos
const mysqlConect = require("../config/database.js");

exports.Clientes = async (req, res, next) => {
  try {
    await mysqlConect.query(
      "SELECT * FROM `TBL_PE_CLIENTE`",
      (err, rows, fields) => {
        res.send(rows);
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
exports.Cliente = async (req, res, next) => {
  const { id } = req.params;

  try {
    await mysqlConect.query(
      `SELECT * FROM TBL_PE_CLIENTE WHERE  COD_CLIENTE = ${id}`,
      (err, rows, fields) => {
        res.send(rows);
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
exports.DeleteCliente = async (req, res, next) => {
  const { id } = req.params;

  try {
    await mysqlConect.query(
      `DELETE FROM TBL_PE_CLIENTE WHERE  COD_CLIENTE = ${id}`,
      (err, rows, fields) => {
        res.send('Eliminado');
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
exports.NuevoCliente = async (req, res, next) => {
  const {
    NOMBRE,
    APELLIDO,
    IDENTIFICACION,
    CREADO_POR,
    TELEFONO,
    RNT_EMPRESA,
  } = req.body;

  console.log(
    "CALL `INS_CLIENTE`" +
      `('${NOMBRE}','${APELLIDO}','${CREADO_POR}','${IDENTIFICACION}','${TELEFONO}','${RNT_EMPRESA}');`
  );
  try {
    await mysqlConect.query(
      "CALL `INS_CLIENTE`" +
        `('${NOMBRE}','${APELLIDO}','${CREADO_POR}','${IDENTIFICACION}','${TELEFONO}','${RNT_EMPRESA}');`,
      (err, rows, fields) => {
        res.send(rows);
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
exports.UpdateCliente = async (req, res, next) => {
  const {
    NOMBRE,
    APELLIDO,
    IDENTIFICACION,
    MODIFICADO_POR,
    TELEFONO,
    RNT_EMPRESA,
  } = req.body;

  const {id}= req.body;

  try {
    await mysqlConect.query(
      "CALL `UPD_CLIENTE`" +
        `('${id}','${NOMBRE}','${APELLIDO}','${MODIFICADO_POR}','${IDENTIFICACION}','${TELEFONO}','${RNT_EMPRESA}');`,
      (err, rows, fields) => {
        res.send("Actualizado");
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
