//Seccion de las
//-----------------------------------------Imports
const express = require("express");
const router = express.Router();
//#####################################

//---------------- Import Constroladores
//########PERSONAS###########
const {
  Personas,
  Persona,
  NuevaPersona,
  UpdatePersona,
  DeletePersona,
  PersonaId,
} = require("../controllers/Pe_personas");
//########ESTADISTICA###########
const {
  MES,
  DIA,
  VentasCompleta,
  VentasPendiente,
  Ventas,
  CantidadProducto,
  TotalPersonas,
  TotalAdministrador,
  TotalEmpleado,
  TotalMecanico,
  TotalProveedor,
} = require("../controllers/Estadistica");
//########PRODUCTO###########
const {
  Producto,
  Productos,
  NuevoProducto,
  DeleteProducto,
  UpdateProducto,
  ProductoCodigo,
  ProductoProveedor,
} = require("../controllers/Producto");
//########CATEGORIA###########
const {
  Categoria,
  Categorias,
  DeleteCategoria,
  NuevaCategoria,
} = require("../controllers/Categoria");

//########BITACORA##########
const {
  Bitacoras,
  NuevoBitacoras,
  Bitacora,
  DeleteBitacora,
} = require("../controllers/Bitacora");

//########SERVICIO##########
const {
  NuevoServicio,
  Servicio,
  ServicioPersona,
  Servicios,
  UpdateServicio,
} = require("../controllers/Servicio");
//########CLIENTE##########
const { Cliente, Clientes, NuevoCliente, DeleteCliente, UpdateCliente } = require("../controllers/Cliente");
//########PROVEEDOR##########
const {
  Proveedor,
  Proveedores,
  NuevoProveedor,
  UpdateProveedor,
  DeleteProveedor,
  ProveedoresTEFONO,
  ProveedoresProducto,
} = require("../controllers/Proveedor");
//########PROCEPAR DETALLES DE VENTA##########
const { Venta_Detalle } = require("../controllers/VentaDetalle");
//########PROCEPAR FACTURA VENTA##########
const { Procesar_Venta } = require("../controllers/ProcesarVenta");
//########PROCEPAR PAGO DE UNA VENTA##########
const { Procesar_Pago } = require("../controllers/ProcesarPago");
//########BACKUP#############################
const { Backup, Importacion } = require("../controllers/backup");
//########SEGURIDAD##############
const {
  DELETESeguridad,
  NuevaSeguridad,
  Seguridad,
  UpdateSeguridad,  
  Segurida} = require("../controllers/Seguridad");
  
  //########ROLES###############
const {DeleteRole,NuevoRole,Role,Roles,UpdateRole, RolPersona, RoleCount, RoleN, UpdateHas, RolesNombre, NuevoHAS  } = require("../controllers/Roles");
const { NuevoTestimonial, DeleteTestimonial, Testimoniales } = require("../controllers/Testimoniales");
const { LATITUD, LONGITUD, Mapa } = require("../controllers/Lat_Long");
const { TelefonoPersona, Telefonos } = require("../controllers/Telefono");
const { DireccionPersona, Direcciones } = require("../controllers/Direccion");
const { PermisoPersona, RolesH } = require("../controllers/Permission");
const { Imagen, Imagenes, UpdateImaagen } = require("../controllers/ImagenInicio");

//---------------------------------------------------------RUTAS
module.exports = function () {
  //----------------MODULO PERSONAS
  router.get("/persona", Personas);
  router.get("/personaRol/:id", RolPersona);
  router.get("/persona/:id", Persona);
  router.get("/personaIdentificacion/:id", PersonaId);
  router.put("/persona/:id", UpdatePersona);
  router.delete("/persona/:id", DeletePersona);
  router.post("/persona", NuevaPersona);
  //*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

  //----------------MODULO ESTADISTICA
  router.get("/estadistica/dia", DIA);
  router.get("/estadistica/mes", MES);
  router.get("/estadistica/ventas", Ventas);
  router.get("/estadistica/ventasCompletas", VentasCompleta);
  router.get("/estadistica/ventasPendites", VentasPendiente);
  router.get("/estadistica/CantidadProducto", CantidadProducto);
  router.get("/estadistica/TotalPeronas", TotalPersonas);
  router.get("/estadistica/TotalAdministrado", TotalAdministrador);
  router.get("/estadistica/TotalEmpleado", TotalEmpleado);
  router.get("/estadistica/TotalMecanico", TotalMecanico);
  router.get("/estadistica/Proveedor", TotalProveedor);
  //*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

  //----------------MODULO PRODUCTO
  router.get("/Producto/:id", Producto);
  router.get("/ProductoCodigo/:id", ProductoCodigo);
  // router.get("/ProductoPro/:id", ProductoProveedor);
  router.put("/Producto/:id", UpdateProducto);
  router.delete("/Producto/:id", DeleteProducto);
  router.get("/Producto", Productos);
  router.post("/Producto", NuevoProducto);
  //*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

  //----------------MODULO CATEGORIA
  router.get("/Categoria/:id", Categoria);
  router.put("/Categoria/:id", Categoria);
  router.delete("/Categoria/:id", DeleteCategoria);
  router.get("/Categoria", Categorias);
  router.post("/Categoria", NuevaCategoria);
  //*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

  //----------------MODULO BITACORA
  router.get("/Bitacora", Bitacoras);
  router.get("/Bitacora/:id", Bitacora);
  router.post("/Bitacora", NuevoBitacoras);
  router.delete("/Bitacora/:id", DeleteBitacora);
  //*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

  //----------------MODULO SERVICIO
  router.get("/Servicio/:id", Servicio);
  router.get("/Servicio/persona/:id", ServicioPersona);
  router.get("/Servicio", Servicios);
  router.post("/Servicio", NuevoServicio);
  router.put("/Servicio/:id", UpdateServicio);
  //*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

  //----------------MODULO CLIENTE
  router.get("/Cliente/:id", Cliente);
  router.delete("/Cliente/:id", DeleteCliente);
  router.put("/Cliente/:id", UpdateCliente);
  router.get("/Cliente", Clientes);
  router.post("/Cliente", NuevoCliente);
  //*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

  //----------------MODULO PROVEEDOR
  router.get("/Proveedor/:id", Proveedor);
  router.get("/ProveedorProduc/:id", ProveedoresProducto);
  router.delete("/Proveedor/:id", DeleteProveedor);
  router.put("/Proveedor/:id", UpdateProveedor);
  router.get("/Proveedor", Proveedores);
  router.get("/ProveedorTelefono", ProveedoresTEFONO);
  router.post("/Proveedor", NuevoProveedor);

  //*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

  //----------------MODULO SEGURIDAD
  router.delete("/Seguridad/:id", DELETESeguridad);
  router.put("/Seguridad/:id", UpdateSeguridad);
  router.get("/Seguridad", Seguridad);
  router.get("/Seguridad/:id", Segurida);
  router.post("/Seguridad/", NuevaSeguridad);
  //*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

  //----------------MODULO ROLES
  router.delete("/Roles/:id", DeleteRole);
  router.put("/Roles/:id", UpdateRole);
  router.put("/UPRolesH/:id", UpdateHas);
  router.get("/Roles/", Roles);
  router.get("/RolesH/", RolesH);
  router.get("/RolesNombre/:id", RolesNombre);
  router.get("/Roles/:id", Role);
  router.get("/RolesN/:id", RoleN);
  router.post("/Roles/", NuevoRole);
  router.post("/RolesH/", NuevoHAS);
  //*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

  //----------------MODULO Telefono
  router.get("/Telefonos/:id", TelefonoPersona);
  router.get("/Telefonos", Telefonos);
  //*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
  //----------------MODULO Direccion
  router.get("/Direccion/:id", DireccionPersona);
  router.get("/Direccion", Direcciones);
  //*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

  //----------------MODULO TESTIMO
  router.delete("/Testimonial/:id", DeleteTestimonial);
  router.post("/Testimonial/", NuevoTestimonial);
  router.get("/Testimonial/", Testimoniales);
  //*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*



  //----------------MODULO IMAGENES

  router.get('/Imagenes/:id',Imagen)
  router.get('/Imagenes/',Imagenes)
  router.put("/Imagenes/:id", UpdateImaagen);
  //----------------MODULO PROCESAR VENTA DETALLE
  router.post("/VentaDetalle", Venta_Detalle);
  //*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
  //----------------MODULO PROCESAR FATURA
  router.post("/ProcesarFactura", Procesar_Venta);
  //*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
  //----------------MODULO PROCESAR PAGO
  router.post("/ProcesarPago", Procesar_Pago);
  //*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

  router.get("/ba", Backup);
  router.get("/ba/:id", Importacion);
  
  
  
  router.get("/direccionGPS/:id",Mapa);


  //PERMISOS
  // router.get("/Permisos", PermisoPersona);


  return router;
};
//#####################################
