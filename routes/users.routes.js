const express = require("express"); //Requiriendo express
const {router} = express.Router();

app.get("/users/:id", (req, res) => {
  const {id}=req.params
  //Parámetro 1 es la ruta, el 2 un callback
  res.json([
    { id, name: "Danier", precio: 20 },
  ]);
});

app.get("/users", (req, res) => {
  const {limit,offset}=req.query
  //Parámetro 1 es la ruta, el 2 un callback

  if(limit&&offset){
  res.json([
    { limit,offset},
  ]);}
  else{
    res.send('No hay parametros')
  }
});

module.exports = router;
