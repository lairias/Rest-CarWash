//Importacion de la base de datos
const mysqlConect = require("../config/database.js");

exports.Procesar_Venta = async (req, res, next) => {
  const { COD_CLIENTE, COD_PERSONA } = req.body;
  try {
    await mysqlConect.query(
      "CALL `PROCESAR_VENTA`" +
        `('${COD_CLIENTE}',
        '${COD_PERSONA}')`,
      (err, rows, fields) => {
        res.send(rows);
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
