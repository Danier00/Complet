const express = require("express"); //Requiriendo express
const faker=require('faker')
const {router} = express.Router(); //Creando app con constructor express

router.get("/products", (req, res) => {
  //Parámetro 1 es la ruta, el 2 un callback
  const prods=[]
  const {size}=req.query
  const limit=size||10

  for (let i = 0; i < limit; i++) {
    prods.push({
      name:faker.commerce.productName(),
      precio:parseInt(faker.commerce.price()),
      image:faker.image.imageUrl()
    })
  }
  res.json(prods);
});

router.get("/products/:id", (req, res) => {
  //Parámetro 1 es la ruta, el 2 un callback
  const id = req.params.id;
  res.json([{ id, name: "XXXXXX", precio: 12000 }]);
});

router.get("/categorias/:cateId/products/:prodId", (req, res) => {
  //Parámetro 1 es la ruta, el 2 un callback
  const { cateId, prodId } = req.params;
  res.json([{ cateId, prodId }]);
});

module.exports = productsRouter;

