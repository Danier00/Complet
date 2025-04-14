// const express = require("express"); //Requiriendo express
// const router = express.Router();
// router.get("/", (req, res) => {
//   //Parámetro 1 es la ruta, el 2 un callback
//   res.json([
//     { name: "Granos" },
//     { name: "Aseo"  },
//   ]);
// });

// router.get("/:id", (req, res) => {
//   const{id}=req.params
//   //Parámetro 1 es la ruta, el 2 un callback
//   res.json([
//     { id,name: "Granos" }
//   ]);
// });

// module.exports = router;

const express = require("express"); //Requiriendo express
const router = express.Router();
const catService= require('../services/categories.services');
const Service = new catService();

router.get("/", (req, res) => {
  const cats=Service.find();
  res.json(cats)
});

router.get("/:id", (req, res) => {
  const {id}=req.params;
  const user = Service.findOne(id);
  res.json(user);
});

router.post("/", (req, res) => {
  //Parámetro 1 es la ruta, el 2 un callback
  const body = req.body;
  res.status(201).json([
    {
      message: "Usuario Creado",
      Data: body,
    },
  ]);
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json([
    {
      message: "Usuario Actualizado",
      Data: body,
      id,
    },
  ]);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.json([
    {
      message: "Usuario Eliminado",
      id,
    },
  ]);
});

module.exports = router;

