

//Importacion de la base de datos
const mysqlConect = require("../config/database.js");


// exports.LONGITUD = async (req, res, next) => {
//   try {
//     await mysqlConect.query(
//       `SELECT DES_SEGURIDAD FROM TBL_SEGURIDAD WHERE COD_SEGURIDAD = '3'`,
//       (err, rows, fields) => {
//         res.send(rows);
//       }
//     );
//   } catch (error) {
//     console.log(error);
//     next();
//   }
// };
// exports.LATITUD = async (req, res, next) => {
//   try {
//     await mysqlConect.query(
//       `SELECT DES_SEGURIDAD  FROM TBL_SEGURIDAD WHERE COD_SEGURIDAD = '2'`,
//       (err, rows, fields) => {
//         res.send(rows);
//       }
//     );
//   } catch (error) {
//     console.log(error);
//     next();
//   }
// };

exports.Mapa = async (req, res, next) => {
  const {id} = req.params;
  console.log(`SELECT DES_SEGURIDAD  FROM TBL_SEGURIDAD WHERE COD_SEGURIDAD = ${id}`);
  try {
    await mysqlConect.query(
      `SELECT DES_SEGURIDAD  FROM TBL_SEGURIDAD WHERE COD_SEGURIDAD = ${id}`,
      (err, rows, fields) => {
        res.send(rows);
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
