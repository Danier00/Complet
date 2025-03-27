const express = require("express");
const faker=require('faker')
const app = express(); 
const port = 3005; 
app.get("/", (req, res) => {
  //Parámetro 1 es la ruta, el 2 un callback
  res.send("Este Es El Server De Danier");
});
app.get("/nuevo", (req, res) => {
  //Parámetro 1 es la ruta, el 2 un callback
  res.send("Esta Es La Nueva Ruta");
});
//Indicando que debe escuchar el puerto 3005
app.listen(port, () => {
  //Parámetro 1 es el puerto, el 2 un callback
  console.log("Escuchando el puerto: " + port);
});
