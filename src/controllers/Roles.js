//Importacion de la base de datos
const mysqlConect = require("../config/database.js");
////////////////////////QUERY QUE OBTIENE TODAS LAS PERSONAS
exports.Roles = async (req, res, next) => {
  try {
    await mysqlConect.query(
      "SELECT * FROM roles",
      (err, rows, fields) => {
        res.send(rows);
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
exports.RolPersona = async (req, res, next) => {
  const {id} = req.params;
  try {
    await mysqlConect.query(
      `SELECT P.name FROM users U INNER JOIN model_has_roles M INNER JOIN role_has_permissions RH INNER JOIN permissions P ON U.id = M.model_id AND RH.permission_id = P.id WHERE U.id = ${id}`,
      (err, rows, fields) => {
        res.send(rows);
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
exports.Role = async (req, res, next) => {
  const { id } = req.params;

  try {
    await mysqlConect.query(
      `SELECT P.name As Permiso_name, P.id as PermisoID, R.name FROM roles as R, role_has_permissions RHP, permissions as P WHERE RHP.role_id = R.id and P.id= RHP.permission_id and R.id  = ${id};`,
      (err, rows, fields) => {
        res.send(rows);
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
exports.RoleN = async (req, res, next) => {
  const { id } = req.params;
  try {
    await mysqlConect.query(
      `SELECT *  from roles where id = ${id};`,
      (err, rows, fields) => {
        res.send(rows);
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
exports.NuevoRole = async (req, res, next) => {
  const { NAME } = req.body;

  try {
    await mysqlConect.query(
      "CALL `INS_ROLE`" + `('${NAME}')`,
      (err, rows, fields) => {
        res.send("Creado");
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
exports.NuevoHAS = async (req, res, next) => {
  const { IDROL, IDPERMI } = req.body;

  try {
    await mysqlConect.query(
      "CALL `INS_ROLE_HAS_PERMISSIONS`" + `('${IDPERMI}','${IDROL}')`,
      (err, rows, fields) => {
        res.send("Creado");
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
exports.RolesNombre = async (req, res, next) => {
  const { id } = req.params;

  try {
    await mysqlConect.query(
      `SELECT * FROM roles WHERE name = '${id}'`, (err, rows, fields) => {
      res.send(rows);
    });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.DeleteRole = async (req, res, next) => {
  const { id } = req.params;
  const { Rol } = req.body;

 
  try {
    await mysqlConect.query(
          `DELETE FROM role_has_permissions WHERE role_has_permissions.permission_id = '${Rol}'  AND role_has_permissions.role_id = '${id}'  `,
      (err, rows, fields) => {
        res.send("Eliminado");
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
exports.UpdateRole = async (req, res, next) => {
  const { id } = req.params;
  const { NAME } = req.body;

  try {
    await mysqlConect.query(
      "CALL `UPD_ROLE`" + `('${NAME}','${id}');`,
      (err, rows, fields) => {
        res.send('Actualizado');
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
exports.UpdateHas = async (req, res, next) => {
  const { id } = req.params;
  const { PermisoID, AcPermi } = req.body;
  console.log(`UPDATE role_has_permissions SET permission_id = '${PermisoID}' WHERE role_has_permissions.permission_id = '${AcPermi}' AND role_has_permissions.role_id = '${id}'`);
  try {
    await mysqlConect.query(`UPDATE role_has_permissions SET permission_id = '${PermisoID}' WHERE role_has_permissions.permission_id = '${AcPermi}' AND role_has_permissions.role_id = '${id}';`,
      (err, rows, fields) => {
        res.send("Actualizado");
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
