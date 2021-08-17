//Importacion de la base de datos
const mysqlConect = require("../config/database.js");

const RandomCode = require("random-codes");

const rc = new RandomCode(config);

////////////////////////QUERY QUE OBTIENE TODAS LAS PERSONAS

exports.Producto = async (req, res, next) => {
  const { id } = req.params;
  try {
    await mysqlConect.query(
      `SELECT * from TBL_IN_PRODUCTO P INNER JOIN TBL_IN_ENTRADA IE ON P.COD_PRODUCTO = IE.COD_PRODUCTO WHERE P.COD_PRODUCTO = ${id} `,
      (err, rows, fields) => {
        res.send(rows);
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
exports.ProductoProveedor = async (req, res, next) => {
  const { id } = req.params;
  console.log(id)
  console.log(`SELECT * from TBL_IN_PRODUCTO P INNER JOIN TBL_IN_COMPRA_DETALLE C ON P.COD_PRODUCTO = C.COD_PRODUCTO WHERE P.COD_PRODUCTO = ${id}`);
  try {
    await mysqlConect.query(
      `SELECT * from TBL_IN_PRODUCTO P INNER JOIN TBL_IN_COMPRA_DETALLE C ON P.COD_PRODUCTO = C.COD_PRODUCTO WHERE P.COD_PRODUCTO = ${id}`,
      (err, rows, fields) => {
        res.send(rows);
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};


exports.ProductoCodigo = async (req, res, next) => {
  const { id } = req.params;
  try {
    await mysqlConect.query(
      `SELECT * from TBL_IN_PRODUCTO  WHERE CODIGO = '${id}' `,
      (err, rows, fields) => {
        res.send(rows);
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.Productos = async (req, res, next) => {
  try {
    await mysqlConect.query(
      `SELECT * FROM TBL_IN_PRODUCTO;`,
      (err, rows, fields) => {
        res.send(rows);
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
exports.NuevoProducto = async (req, res, next) => {
  const code = rc.generate();


  console.log(code)
  const {
    COD_CATEGORIA,
    NOM_PRODUCTO,
    IMG_PRODUCTO,
    MAR_PRODUCTO,
    COST_PRODUCTO,
    CAN_PRODUCTO,
    DES_PRODUCTO,
    DES_ENTRADA,
    ID_PERSONA,
    PROVEEDOR,
    IMG_COMPRA,
    IVA,
  } = req.body;
  try {
    await mysqlConect.query(
      "CALL `INS_PRODUCTO`" +
        `('${code}','${COD_CATEGORIA}','${NOM_PRODUCTO}','${IMG_PRODUCTO}','${MAR_PRODUCTO}','${COST_PRODUCTO}','${CAN_PRODUCTO}','${DES_PRODUCTO}','${DES_ENTRADA}','${ID_PERSONA}','${PROVEEDOR}','${IMG_COMPRA}','${IVA}')`,
      (err, rows, fields) => {
        res.send("Creado");
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.UpdateProducto = async (req, res, next) => {
  const { id} = req.params;

  const {
    COD_CATEGORIA,
    NOM_PRODUCTO,
    IMG_PRODUCTO,
    MAR_PRODUCTO,
    COST_PRODUCTO,
    CAN_PRODUCTO,
    DES_PRODUCTO,
    EST_PRODUCTO,
    DES_ENTRADA,
    DETALLE,
    MODIFICADO_POR,
    IMG_COMPRA,
    IVA
  } = req.body;
  try {
    await mysqlConect.query(
      "CALL `UPD_PRODUCTO`" +
        `('${COD_CATEGORIA}',
        '${NOM_PRODUCTO}',
        '${IMG_PRODUCTO}',
        '${MAR_PRODUCTO}',
        '${COST_PRODUCTO}',
        '${CAN_PRODUCTO}',
        '${DES_PRODUCTO}',
        '${EST_PRODUCTO}',
        '${DES_ENTRADA}',
        '${DETALLE}',
        '${MODIFICADO_POR}',
        '${id}',
        '${IMG_COMPRA}',
        '${IVA}')`,
      (err, rows, fields) => {
        console.log(
          "CALL `UPD_PRODUCTO`" +
            `('${COD_CATEGORIA}',
        '${NOM_PRODUCTO}',
        '${IMG_PRODUCTO}',
        '${MAR_PRODUCTO}',
        '${COST_PRODUCTO}',
        '${CAN_PRODUCTO}',
        '${DES_PRODUCTO}',
        '${EST_PRODUCTO}',
        '${DES_ENTRADA}',
        '${DETALLE}',
        '${MODIFICADO_POR}',
        '${id}',
        '${IMG_COMPRA}',
        '${IVA}';`
        );
        res.send("ACTUALIZADO");
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.DeleteProducto = async (req, res, next) => {
  const { id } = req.params;
  try {
    await mysqlConect.query(
      `DELETE * FROM TBL_IN_PRODUCTO WHERE COD_PRODUCTO = ${id} `,
      (err, rows, fields) => {
        res.send("ELIMINADO");
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};

var config = {
  // A string containing available chars
  chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",

  // Separator char used to divide code parts
  separator: "-",

  // Char used to mask code
  mask: "*",

  // Number of parts the code contains
  parts: 2,

  // Size of each part
  part_size: 4,

  // Function used to get a random char from the chars pool
  // (Please use a better one)
  getChar: function (pool) {
    var random = Math.floor(Math.random() * pool.length);
    return pool.charAt(random);
  },
};
