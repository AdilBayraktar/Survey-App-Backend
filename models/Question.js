const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema(
  {
    questionText: {
      type: String,
      required: true,
      trim: true,
      minlingth: 1,
      maxlingth: 255,
    },
    answersList: {
      type: [String],
      required: true,
      minlingth: 1,
    },
  },
  { timestamps: true }
);

const Question = mongoose.model("Question", QuestionSchema);
module.exports = { Question };
