const { getProducts } = require("../controllers/products");

const ProductSchema = {
  type: "object",
  response: {
    200: {
      type: "object",
      properties: {
        id: { type: "integer" },
        name: { type: "string" },
        description: { type: "string" },
        image: { type: "string" },
      },
    },
  },
};

const productOptions = {
  schema: ProductSchema,
  handler: getProducts,
};

const routes = (fastify, _, done) => {
  fastify.get("/api/products", productOptions);
  done();
};

module.exports = routes;
