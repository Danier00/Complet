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
