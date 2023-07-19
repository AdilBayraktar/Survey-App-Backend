const mongoose = require("mongoose");

const ResponseSchema = new mongoose.Schema(
  {
    guestName: {
      type: String,
      required: true,
      trim: true,
      minlingth: 1,
      maxlingth: 255,
    },
    answers: {
      type: [],
      required: true,
      trim: true,
      minlingth: 1,
      maxlingth: 255,
    },
  },
  { timestamps: true }
);

const Response = mongoose.model("Response", ResponseSchema);
module.exports = { Response };
