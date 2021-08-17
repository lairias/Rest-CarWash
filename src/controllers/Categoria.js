//Importacion de la base de datos
const mysqlConect = require("../config/database.js");

////////////////////////QUERY QUE OBTIENE TODAS LAS PERSONAS

exports.Categoria = async (req, res, next) => {
  const { id } = req.params;
  try {
    await mysqlConect.query(
      `SELECT * FROM TBL_IN_CATEGORIA WHERE COD_CATEGORIA = ${id} `,
      (err, rows, fields) => {
        console.log(rows);
        res.send(rows);
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
exports.Categorias = async (req, res, next) => {
  try {
    await mysqlConect.query(
      `SELECT * FROM TBL_IN_CATEGORIA`,
      (err, rows, fields) => {
        console.log(rows);
        res.send(rows);
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
exports.DeleteCategoria = async (req, res, next) => {
  const { id } = req.params;
  try {
    await mysqlConect.query(
      `DELETE * FROM TBL_IN_CATEGORIA WHERE COD_CATEGORIA = ${id}`,
      (err, rows, fields) => {
        res.send("Eliminado");
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};


exports.NuevaCategoria = async (req, res, next) => {
  const { NOM_CATEGORIA, DES_CATEGORIA, ID_PERSONA } = req.body;
  try {
    await mysqlConect.query(
      "CALL `INS_CATEGORIA`" +
        `('${NOM_CATEGORIA}',
        '${DES_CATEGORIA}',
        '${ID_PERSONA}')`,
      (err, rows, fields) => {
        res.send("CREADO");
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
exports.UpdateCategoria = async (req, res, next) => {
  const {
    ID_CATEGORIA,
    NOM_CATEGORIA,
    DES_CATEGORIA,
    EST_CATEGORIA,
    ID_PERSONA,
  } = req.body;
  try {
    await mysqlConect.query(
      "CALL `UPD_CATEGORIA`" +
        `('${ID_CATEGORIA}',
            '${NOM_CATEGORIA}',
        '${DES_CATEGORIA}',
        '${EST_CATEGORIA}',
        '${ID_PERSONA}')`,
      (err, rows, fields) => {
        res.send("Actualizado");
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
