require("dotenv").config();

// connect database
require("./db")();

// start server
require("./server")();
