const express = require("express"); // Requiriendo express
const faker = require("faker");
const router = express.Router(); // Creando app con constructor express
const productsService = require("../services/product.services.js"); // Requiriendo el servicio de productos
const Service = new productsService(); // Instanciando el servicio de productos
const validateHandler = require("../middlewares/validate.handler.js");
const {
  getProductSchema,
  createProductSchema,
  updateProductSchema,
} = require("../schema/product.schema.js");

// Obtener todos los productos
router.get(
  "/",
  async (req, res) => {
    try {
      const prods = await Service.find();
      res.json(prods);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
);

// Obtener producto por ID
router.get(
  "/:id",
  validateHandler(getProductSchema,'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const prods = await Service.findOne(id);
      res.json(prods);
    } catch (error) {
      next(error);
    }
  },
);

// Crear nuevo producto
router.post(
  "/",
  validateHandler(createProductSchema,'body'),
  async (req, res) => {
    try {
      const body = req.body;
      const newProduct = await Service.create(body);
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
);

// Actualizar producto
router.patch(
  "/:id",
  validateHandler(getProductSchema,'params'),
  validateHandler(updateProductSchema,'body'),
  async (req, res) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await Service.update(id, body);
      res.json(product);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
);

// Eliminar producto
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Service.delete(id);
    res.json(response);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
