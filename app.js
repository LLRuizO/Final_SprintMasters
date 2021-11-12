const express = require("express");
const bodyParser = require("body-parser");

//Inicializaicón de express
const app = express(); //Debemos traer nuestra versión de la API y sabemos que esta en config.js
const { API_VERSION } =  require('./config');

//Aquí cargaremos el load rutings, por ahora vacio y lo llenamos más adelante
const getUser=require('./routers/getUser')
const userRoutes = require('./routers/user');
const registerproductsRouter=require('./routers/registerproducts')
const registersellRouter=require('./routers/registersell')

//Generamos la configuración del body-parser
//Como podemos obervar, se nos indica que bodyParser es "obsoleta" usamos express directamente
//app.use(bodyParser.urlencoded({ extended:false })); si descomentas esta linea, puedes obervar el mensaje
app.use(express.urlencoded({ extended:false })); 
app.use(express.json());

//Configuración de los header de HTTP


//Establecemos las rutas basicas
app.use(`/api/${API_VERSION}`, userRoutes);
app.use(`/api/${API_VERSION}`, registerproductsRouter);
app.use(`/api/${API_VERSION}`, registersellRouter);
app.use(`/api/${API_VERSION}`, getUser)

module.exports = app; //Todas las configuraciones estaran dentro de app