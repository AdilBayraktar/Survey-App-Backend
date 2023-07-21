const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/connectDB");
require("dotenv").config();

//Connect Database
connectDB();

app.use(
  // Parse data to json format
  express.json({
    limit: "20kb",
  })
);

//Cors
app.use(cors({ origin: "*" }));

//Routes
app.use("/api/auth", require("./routes/authRoute"));
app.use("/api/questions", require("./routes/questionRoute"));
app.use("/api/responses", require("./routes/responseRoute"));

//Server
const port = process.env.PORT || 8000;
app.listen(port, () =>
  console.log(`Server runnung in ${process.env.NODE_ENV} mode on port ${port}`)
);
