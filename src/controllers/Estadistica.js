//Importacion de la base de datos
const mysqlConect = require("../config/database.js");
////////////////////////QUERY QUE OBTIENE TODAS LAS PERSONAS
exports.MES = async (req, res, next) => {
  try {
    await mysqlConect.query(
      "SELECT MONTH(created_at) as MES, COUNT(id) AS RESULTADO  from users GROUP by MONTH(created_at);",
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
exports.DIA = async (req, res, next) => {
  try {
    await mysqlConect.query(
      "SELECT DAY(created_at) as DIA, COUNT(id) AS RESULTADO  from users GROUP by DAY(created_at);",
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
exports.VentasCompleta = async (req, res, next) => {
  try {
    await mysqlConect.query(
      "SELECT COUNT(id) * from TBL_VENTA WHERE EST_VENTA = 1 ",
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
exports.VentasPendiente = async (req, res, next) => {
  try {
    await mysqlConect.query(
      "SELECT COUNT(id) * from TBL_VENTA WHERE EST_VENTA = 0 ",
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
exports.Ventas = async (req, res, next) => {
  try {
    await mysqlConect.query(
      "SELECT COUNT(id) * FROM TBL_VENTAS ",
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
exports.CantidadProducto = async (req, res, next) => {
  try {
    await mysqlConect.query(
      "SELECT COUNT(COD_PRODUCTO) FROM TBL_IN_PRODUCTO",
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

exports.TotalPersonas = async (req, res, next) => {
  try {
    await mysqlConect.query(
      "SELECT COUNT(id) as TOTAL  from users",
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

exports.TotalAdministrador = async (req, res, next) => {
  try {
    await mysqlConect.query(
      "SELECT COUNT(role_id) from model_has_roles WHERE role_id = 1",
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
exports.TotalProveedor = async (req, res, next) => {
  try {
    await mysqlConect.query(
      "SELECT COUNT(COD_PROVEEDOR) from TBL_PE_PROVEEDOR",
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
exports.TotalEmpleado = async (req, res, next) => {
  try {
    await mysqlConect.query(
      "SELECT COUNT(role_id) from model_has_roles WHERE role_id =2",
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
exports.TotalMecanico = async (req, res, next) => {
  try {
    await mysqlConect.query(
      "SELECT COUNT(role_id) from model_has_roles WHERE role_id =3",
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
