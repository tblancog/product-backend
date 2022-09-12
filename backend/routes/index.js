const {
  getProducts,
  getProductById,
  createProduct,
} = require("../controllers/products");

const routes = (fastify, _, done) => {
  fastify.get("/api/products", getProducts);
  fastify.get("/api/products/:id", getProductById);
  fastify.post("/api/products", createProduct);
  done();
};

module.exports = routes;
