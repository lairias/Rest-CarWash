//Importacion de la base de datos
const mysqlConect = require("../config/database.js");

////////////////////////QUERY QUE OBTIENE TODAS LAS PERSONAS
exports.Personas = async (req, res, next) => {
  try {
    await mysqlConect.query("SELECT * FROM users;", (err, rows, fields) => {
      res.send(rows);
    });
  } catch (error) {
    console.log(error);
    next();
  }
};
////////////////////////QUERY QUE OBTINE UNA PERSONA
exports.Persona = async (req, res, next) => {
  try {
    const { id } = req.params;

    await mysqlConect.query(
      `SELECT * from users  WHERE id ='${id}' `,
      (err, rows, fields) => {
        res.json(rows);
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
exports.PersonaId = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);

    await mysqlConect.query(
      `SELECT * from users WHERE identificacion ='${id}' `,
      (err, rows, fields) => {
        res.json(rows);
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
////////////////////////QUERY QUE CREA UNA PERSONA
exports.NuevaPersona = (req, res, next) => {
  const {
    name,
    email,
    password,
    last_name,
    imagen,
    identificacion,
    creado_por,
    num_telefono,
    des_telefono,
    num_casa,
    num_calle,
    departamento,
    des_direccion,
    permiso,
  } = req.body;

  try {
    mysqlConect.query(
      "CALL `INS_PERSONA`" +
        `('${name}','${email}','${password}','${last_name}','${imagen}','${identificacion}','${creado_por}','${num_telefono}','${des_telefono}','${num_casa}','${num_calle}','${departamento}','${des_direccion}','${permiso}')`,
      function (error) {
        if (!error) {
          res.json({
            message: "Creado",
          });
        }
      }
    );
  } catch (erro) {
    console.log(erro);
    next();
  }
};
////////////////////////QUERY QUE ACTULIZA UNA PERSONA
exports.UpdatePersona = async (req, res, next) => {
  const { id } = req.params;
  const {
    name,
    email,
    password,
    last_name,
    imagen,
    identificacion,
    modificado_por,
    num_telefono,
    des_telefono,
    num_casa,
    num_calle,
    departamento,
    des_direccion,
    permiso,
    estado,
  } = req.body;

  try {
    await mysqlConect.query(
      "CALL `UPD_PERSONA`" +
        `('${name}',
        '${email}',
        '${last_name}',
        '${imagen}',
        '${identificacion}',
        '${modificado_por}',
        '${num_telefono}',
        '${des_telefono}',
        '${num_casa}',
        '${num_calle}',
        '${departamento}',
        '${des_direccion}',
        '${id}',
        '${permiso}',
        '${estado}')`,
      function (error) {
        if (!error) {
          res.send("Actualizada");
        }
      }
    );
  } catch (erro) {
    console.log(erro);
    next();
  }
};
////////////////////////QUERY QUE ELIMINA UNA PERSONA
exports.DeletePersona = (req, res, next) => {
  const { id } = req.params;

  try {
    mysqlConect.query(`DELETE FROM users WHERE id = ${id}`     , function (error) {
      if (!error) {
        res.send("Persona Eliminada");
      }
    });
  } catch (erro) {
    console.log(erro);
    next();
  }
};
