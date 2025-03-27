const express = require("express"); //Requiriendo express
const router = express.Router();
router.get("/", (req, res) => {
  //Parámetro 1 es la ruta, el 2 un callback
  res.json([
    { name: "Granos" },
    { name: "Aseo"  },
  ]);
});

router.get("/:id", (req, res) => {
  const{id}=req.params
  //Parámetro 1 es la ruta, el 2 un callback
  res.json([
    { id,name: "Granos" }
  ]);
});

module.exports = router;