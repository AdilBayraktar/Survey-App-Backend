const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

//Cors
app.use(cors({ origin: "*" }));

//Routes

//Server
const port = process.env.PORT || 8000;
app.listen(port, () =>
  console.log(`Server runnung in ${process.env.NODE_ENV} mode on port ${port}`)
);
