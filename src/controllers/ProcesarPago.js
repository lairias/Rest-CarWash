const { v4: uuidv4 } = require("uuid");

//Importacion de la base de datos
const mysqlConect = require("../config/database.js");

exports.Procesar_Pago = async (req, res, next) => {
  const { COD_FACTURA, COD_MET_PAGO } = req.body;

  try {
    await mysqlConect.query(
      "CALL `PROCESAR_PAGO`" +
        `('${COD_FACTURA}',
        '${COD_MET_PAGO}',
        '${uuidv4()}')`,
      (err, rows, fields) => {
        res.send(rows);
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
