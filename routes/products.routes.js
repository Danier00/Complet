const express = require("express"); //Requiriendo express
const faker = require("faker");
const  router  = express.Router(); //Creando app con constructor express

router.get("/", (req, res) => {
  //Parámetro 1 es la ruta, el 2 un callback
  const prods = [];
  const { size } = req.query;
  const limit = size || 10;

  for (let i = 0; i < limit; i++) {
    prods.push({
      name: faker.commerce.productName(),
      precio: parseInt(faker.commerce.price()),
      image: faker.image.imageUrl(),
    });
  }
  res.json(prods);
});

router.get("/:id", (req, res) => {
  //Parámetro 1 es la ruta, el 2 un callback
  const id = req.params.id;
  res.json([
    {
      name: faker.commerce.productName(),
      precio: parseInt(faker.commerce.price()),
      image: faker.image.imageUrl(),
    },
  ]);
});

module.exports = router;
