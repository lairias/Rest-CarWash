//Importacion de la base de datos
const mysqlConect = require("../config/database.js");

exports.Servicios = async (req, res, next) => {
  try {
    await mysqlConect.query(
      `SELECT * FROM TBL_RE_SERVICIO`,
      (err, rows, fields) => {
        res.send(rows);
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
exports.Servicio = async (req, res, next) => {
  const { id } = req.params;
  try {
    await mysqlConect.query(
      `SELECT * FROM TBL_RE_SERVICIO WHERE COD_SERVICIO = '${id}' `,
      (err, rows, fields) => {
        res.send(rows);
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
exports.ServicioPersona = async (req, res, next) => {
  const { id } = req.params;
  try {
    await mysqlConect.query(
      `SELECT * FROM TBL_RE_SERVICIO WHERE id_people = ${id} `,
      (err, rows, fields) => {
        res.send(rows);
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
exports.NuevoServicio = async (req, res, next) => {
  const {
    ID_PERSONA,
    TIP_SERVICIO,
    COST_SERVICIO,
    ID_CREADO_POR,
    TIEMPO,
    IMG_SERVICIO,
    Des_servicio,
  } = req.body;
  try {
    await mysqlConect.query(
      "CALL `INS_SERVICIO`" +
        `('${ID_PERSONA}',
        '${TIP_SERVICIO}',
        '${COST_SERVICIO}',
        '${ID_CREADO_POR}',
        '${IMG_SERVICIO}',
        '${TIEMPO}',
        '${Des_servicio}')`,
      (err, rows, fields) => {
        res.send("CREADO");
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
exports.UpdateServicio = async (req, res, next) => {
  const { id } = req.params;
  const {
    ID_PERSONA,
    TIP_SERVICIO,
    IMG_SERVICIO,
    COST_SERVICIO,
    EST_SERVICIO,
    ID_MODIFICADO_POR,
    Des_servicio,
    TIEMPO

  } = req.body;
  try {
    await mysqlConect.query(
      "CALL `UPD_SERVICIO`" +
        `('${id}',
        '${ID_PERSONA}',
        '${TIP_SERVICIO}',
        '${COST_SERVICIO}',
        '${EST_SERVICIO}',
        '${ID_MODIFICADO_POR}',
        '${Des_servicio}',
        '${TIEMPO}',
        '${IMG_SERVICIO}')`,
      (err, rows, fields) => {
        res.send("Actualizado");
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
exports.DeleteServicio = async (req, res, next) => {
  const { id } = req.params;

  try {
    await mysqlConect.query(
      "DELETE FROM `TBL_RE_SERVICIO` WHERE `COD_SERVICIO` = " + `${id}`,
      (err, rows, fields) => {
        res.send("Eliminado");
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
