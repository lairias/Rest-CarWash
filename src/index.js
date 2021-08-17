require("@babel/polyfill");
//-----------------------------------------Imports
const express = require("express"); //El sevider de express
const morgan = require("morgan"); //Peticiones Http
const Router = require("./router"); //Archivo de las rutas
const Parser = require("body-parser");
const cors = require("cors");
const app = express(); //Almacenamos el servidor en una variable
//##################################################

//----------------------------------------Setting
app.set("port", process.env.PORT || 3000); //signamos un puerto al servidor
app.use(cors());
//##################################################

//----------------------------------------- middleware
app.use(morgan("dev")); //usamos morgan para mostar las peticiones Http
app.use(Parser.urlencoded({ extended: true }));
app.use(express.json()); //Le decimos al servidor que trabaje en formato JSON
app.use(Parser.urlencoded({ extended: true }));
//##################################################

//-------------------------------------------Route
app.use("/", Router()); //Usamos las Rutas que creamos
//##################################################

//-------------------------------------------Exports
app.listen(
  app.set("port"),
  console.log(app.get("port"), "http://localhost:3000/persona")
); //Le decimos al servidor en que puerto nos escuche
