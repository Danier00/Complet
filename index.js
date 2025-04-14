const express = require("express");
const routerApi = require("./routes");
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require("./middlewares/error.handler");
const cors = require("cors");
const connectDB = require("./conexion/db");

const app = express();
const port = 3005;

// Conectar a la base de datos
connectDB();

app.use(express.json());

// Activar CORS
app.use(cors());

// Rutas básicas
app.get("/", (req, res) => {
  res.send("Este Es El Server De Danier");
});
app.get("/nuevo", (req, res) => {
  res.send("Esta Es La Nueva Ruta");
});

// Rutas API
routerApi(app);

// Manejo de errores
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

// Iniciar el servidor
app.listen(port, () => {
  console.log("Escuchando el puerto: " + port);
});
