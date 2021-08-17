







//Importacion de la base de datos
const mysqlConect = require("../config/database.js");
////////////////////////QUERY QUE OBTIENE TODAS LAS PERSONAS
exports.Roles = async (req, res, next) => {
  try {
    await mysqlConect.query("SELECT * FROM `roles`", (err, rows, fields) => {
      res.send(rows);
    });
  } catch (error) {
    console.log(error);
    next();
  }
};
exports.RolesH = async (req, res, next) => {
  try {
    await mysqlConect.query(
      `SELECT * FROM permissions
 `,
      (err, rows, fields) => {
        res.send(rows);
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};


exports.UpdateRolUser = async (req, res, next) => {
  const { id } = req.params;
  const { ROLE_ID } = req.body;
  try {
    await mysqlConect.query(
      "CALL `UPD_MODEL_HAS_ROLE`" + `('${ROLE_ID}',''${id}')`,
      (err, rows, fields) => {
        res.send(rows);
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};





