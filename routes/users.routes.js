const express = require("express"); //Requiriendo express
const router = express.Router();
const usersService= require('../services/users.services');
const Service = new usersService();

router.get("/", (req, res) => {
  const users=Service.find();
  res.json(users)
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
