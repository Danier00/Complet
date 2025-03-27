const express = require("express"); //Requiriendo express
const {router} = express.Router();
router.get("/categories", (req, res) => {
  //Parámetro 1 es la ruta, el 2 un callback
  res.json([
    { name: "Granos" },
    { name: "Aseo"  },
  ]);
});

router.get("/categories/:id", (req, res) => {
  const{id}=req.params
  //Parámetro 1 es la ruta, el 2 un callback
  res.json([
    { id,name: "Granos" }
  ]);
});

module.exports = router;