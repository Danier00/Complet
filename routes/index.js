const productsRouter = require("./products.routes.js");
const usersRouter = require("./users.routes.js");
const cateRouter = require("./categories.routes.js");

const express = require("express");

const routerApi = (app) => {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/products", productsRouter);
  router.use("/users", usersRouter);
  router.use("/categories", cateRouter);

  const router2 = express.Router();
  app.use("/api/v2", router2);
};

module.exports = routerApi;
