//Importacion de la base de datos
const mysqlConect = require("../config/database.js");
////////////////////////QUERY QUE OBTIENE TODAS LAS PERSONAS
exports.Testimoniales = async (req, res, next) => {
  try {
    await mysqlConect.query("SELECT U.name, T.DES_TESTIMONIAL, T.USER_TESTIMONIAL from users U INNER JOIN TBL_PE_TESTIMONIALES T ON U.id = T.COD_PERSONA ORDER by rand() LIMIT 3", (err, rows, fields) => {
      res.send(rows);
    });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.NuevoTestimonial = async (req, res, next) => {
  const { COD_PERSONA,DES_TESTIMONIO,USER_TESTIMONIO } = req.body;
  try {
    await mysqlConect.query(
      "CALL `INS_TESTIMONIALES`" +
        `(
          '${COD_PERSONA}
          '${DES_TESTIMONIO}
          '${USER_TESTIMONIO}')`,
      (err, rows, fields) => {
        res.send("Creado");
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.DeleteTestimonial = async (req, res, next) => {
  const { id } = req.params;

  try {
    await mysqlConect.query(
      `DELETE  FROM 'TBL_PE_TESTIMONIALES' WHERE  'COD_TESTIMONIAL' = ${id};`,
      (err, rows, fields) => {
        res.send("Eliminado");
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
