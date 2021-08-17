//Importacion de la base de datos
const mysqlConect = require("../config/database.js");

////////////////////////QUERY QUE OBTIENE TODAS LAS PERSONAS

exports.Proveedores = async (req, res, next) => {
  try {
    await mysqlConect.query(
      "SELECT * FROM users U  INNER JOIN TBL_PE_PROVEEDOR P ON  P.id_people = U.id ",
      (err, rows, fields) => {
        res.send(rows);
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
exports.ProveedoresTEFONO = async (req, res, next) => {
  try {
    await mysqlConect.query(
      "SELECT * FROM TBL_PE_TELEFONO PT INNER JOIN TBL_TEL_PER TP ON PT.COD_TELEFONO = TP.COD_TELEFONO",
      (err, rows, fields) => {
        res.send(rows);
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
exports.ProveedoresProducto = async (req, res, next) => {
  const {id} = req.params;
  try {
    await mysqlConect.query(
      `SELECT * from TBL_IN_PRODUCTO P INNER JOIN TBL_IN_COMPRA_DETALLE C ON P.COD_PRODUCTO = C.COD_PRODUCTO  WHERE P.COD_PRODUCTO = ${id}`,
      (err, rows, fields) => {
        res.send(rows);
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
exports.Proveedor = async (req, res, next) => {
  const { id } = req.params;
  try {
    await mysqlConect.query(
      `SELECT * FROM TBL_PE_PROVEEDOR  WHERE COD_PROVEEDOR = ${id}`,
      (err, rows, fields) => {
        res.send(rows);
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
exports.DeleteProveedor = async (req, res, next) => {
  const { id } = req.params;
  try {
    await mysqlConect.query(
      `DELETE FROM TBL_PE_PROVEEDOR  WHERE COD_PROVEEDOR = ${id}`,
      (err, rows, fields) => {
        res.send("Eliminado");
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
exports.NuevoProveedor = async (req, res, next) => {
  const {
    NOMBRE,
    APELLIDO,
    IMAGEN,
    CREADO_POR,
    IDENTIFICACION,
    TELEFONO,
    RTN_EMPRESA,
    NOM_EMPRESA,
  } = req.body;

 
  try {
    await mysqlConect.query(
      "CALL `INS_PROVEEDOR`" +
        `('${NOMBRE}','${APELLIDO}','${IMAGEN}','${CREADO_POR}','${IDENTIFICACION}','${TELEFONO}','${RTN_EMPRESA}','${NOM_EMPRESA}')`,
      (err, rows, fields) => {
        res.send("Creado");
      }
    );
  } catch (error) {
    return next();
  }
};
exports.UpdateProveedor = async (req, res, next) => {
  const {
    NOMBRE,
    APELLIDO,
    IMAGEN,
    CREADO_POR,
    IDENTIFICACION,
    TELEFONO,
    RTN_EMPRESA,
    NOM_EMPRESA,
  } = req.body;
  const {id}=req.params;

 
  try {
    await mysqlConect.query(
      "CALL `UPD_PROVEEDOR`" +
        `('${id}', '${NOMBRE}','${APELLIDO}','${IMAGEN}','${CREADO_POR}','${IDENTIFICACION}','${TELEFONO}','${RTN_EMPRESA}','${NOM_EMPRESA}')`,
      (err, rows, fields) => {
        res.send("Actualizado");
      }
    );
  } catch (error) {
    return next();
  }
};
