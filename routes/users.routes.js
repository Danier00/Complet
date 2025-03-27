const express = require("express"); //Requiriendo express
const router = express.Router();
router.get("/", (req, res) => {
  const {limit,offset}=req.query
  if(limit&&offset){
  res.json([
    { limit,offset},
  ]);}
  else{
    res.send('No hay parametros')
  }
});

router.get("/:id", (req, res) => {
  const {id}=req.params
  res.json([
    { id, name: "Danier", precio: 20 },
  ]);
});


module.exports = router;
