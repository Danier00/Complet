const boom = require("@hapi/boom");
const Product = require("../models/product.model");

class productsService {
  constructor() {}

  async create(data) {
    console.log("Creando producto con datos:", data);
    const newProduct = await Product.create(data);
    console.log("Producto creado:", newProduct);
    return newProduct;
  }


  async find() {
    return await Product.find();
  }

  async findOne(id) {
    const product = await Product.findById(id);
    if (!product) {
      throw boom.notFound("Producto no encontrado");
    }
    return product;
  }

  async update(id, changes) {
    const product = await Product.findByIdAndUpdate(id, changes, {
      new: true,
    });
    if (!product) {
      throw boom.notFound("Producto no encontrado");
    }
    return product;
  }

  async delete(id) {
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      throw boom.notFound("Producto no encontrado");
    }
    return { id };
  }
}

module.exports = productsService;
