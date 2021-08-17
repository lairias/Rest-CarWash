//Importacion de la base de datos
const mysqlConect = require("../config/database.js");

exports.Venta_Detalle = async (req, res, next) => {
  const { V_CODIGO, V_CAN_VENTA, V_ID_CLIENTE } = req.body;

console.log(req.body)
  console.log(
    "CALL `INS_VENTA_DETALLE`" +
      `('${V_CODIGO}',
        '${V_CAN_VENTA}',
        '${V_ID_CLIENTE}')`
  );
  try {
    await mysqlConect.query(
      "CALL `INS_VENTA_DETALLE`" +
        `('${V_CODIGO}',
        '${V_CAN_VENTA}',
        '${V_ID_CLIENTE}')`,
      (err, rows, fields) => {
        res.send(rows);
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
