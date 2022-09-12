const fastify = require("fastify")({ logger: true });

fastify.register(require("./routes"));

const server = () => {
  fastify.listen({ port: 5000 }, function (err) {
    if (err) {
      console.error("Error while running the app");
      process.exit();
    }
  });
};

module.exports = server;
