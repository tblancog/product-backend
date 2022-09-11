const fastify = require("fastify")({ logger: true });
require("dotenv").config();

const db = require("./data/db");
fastify.register(require("./routes"));
db();

const start = () => {
  try {
    fastify.listen(5000);
  } catch (error) {
    console.error("Error while running the app");
    process.exit();
  }
};

start();
