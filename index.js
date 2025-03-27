const express = require("express");
const routerApi = require("./routes");
const app = express();
const port = 3005;
app.get("/", (req, res) => {
  res.send("Este Es El Server De Danier");
});
app.get("/nuevo", (req, res) => {
  res.send("Esta Es La Nueva Ruta");
});

routerApi(app);

app.listen(port, () => {
  console.log("Escuchando el puerto: " + port);
});
