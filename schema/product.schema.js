const joi = require('joi');

// Validación para el ID (usando ObjectId de MongoDB)
const id = joi.string().length(24).hex(); // 24 caracteres hexadecimales para ObjectId

const name = joi.string().alphanum().min(3).max(9);
const precio = joi.number().min(1).precision(2); // Permitir números con 2 decimales
const image = joi.string().uri();

const createProductSchema = joi.object({
  name: name.required(),
  precio: precio.required(),
  image: image.required()
});

const updateProductSchema = joi.object({
  name: name,
  precio: precio
});

const getProductSchema = joi.object({
  id: id.required()
});

module.exports = { getProductSchema, createProductSchema, updateProductSchema };
