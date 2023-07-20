const mongoose = require("mongoose");

const ResponseSchema = new mongoose.Schema(
  {
    answers: {
      type: [],
      required: true,
    },
  },
  { timestamps: true }
);

const Response = mongoose.model("Response", ResponseSchema);
module.exports = { Response };
