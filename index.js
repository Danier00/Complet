const express = require("express"); //Requiriendo express
const app = express(); //Creando app con constructor express
const port = 3005; //puerto:usualmente es por el orden del 3000
//obteniendo de la aplicación la ruta y un creando callback
//conmensaje indicando mi servidor
app.get("/", (req, res) => {
  //Parámetro 1 es la ruta, el 2 un callback
  res.send("Este Es El Server De Danier");
});
app.get("/nuevo", (req, res) => {
  //Parámetro 1 es la ruta, el 2 un callback
  res.send("Esta Es La Nueva Ruta");
});
app.get("/productos", (req, res) => {
  //Parámetro 1 es la ruta, el 2 un callback
  res.json([
    { name: "XXXXXX", precio: 12000 },
    { name: "Producto2", precio: 1000 },
  ]);
});

app.get("/productos/:id", (req, res) => {
  //Parámetro 1 es la ruta, el 2 un callback
  const id = req.params.id;
  res.json([{ id, name: "XXXXXX", precio: 12000 }]);
});

app.get("/categorias/:cateId/productos/:prodId", (req, res) => {
  //Parámetro 1 es la ruta, el 2 un callback
  const { cateId, prodId } = req.params;
  res.json([{ cateId, prodId }]);
});

// app.get("/usuarios", (req, res) => {
//   //Parámetro 1 es la ruta, el 2 un callback
//   res.json([
//     { name: "Danier", precio: 20 },
//     { name: "XXXXXXXX", precio: 19 },
//   ]);
// });

app.get("/usuarios/:id", (req, res) => {
  const {id}=req.params
  //Parámetro 1 es la ruta, el 2 un callback
  res.json([
    { id, name: "Danier", precio: 20 },
  ]);
});

app.get("/usuarios", (req, res) => {
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

app.get("/categorias", (req, res) => {
  //Parámetro 1 es la ruta, el 2 un callback
  res.json([
    { name: "Granos" },
    { name: "Aseo"  },
  ]);
});

app.get("/categorias/:id", (req, res) => {
  const{id}=req.params
  //Parámetro 1 es la ruta, el 2 un callback
  res.json([
    { id,name: "Granos" }
  ]);
});

//Indicando que debe escuchar el puerto 3005
app.listen(port, () => {
  //Parámetro 1 es el puerto, el 2 un callback
  console.log("Escuchando el puerto: " + port);
});
