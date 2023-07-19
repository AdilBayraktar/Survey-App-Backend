const asyncHandler = require("express-async-handler");
const { Question } = require("../models/Question");

/**-------------
* @desc Get All Questions
* @router /api/questions
* @method GET
* @access public
-------------*/

const getAllQuestions = asyncHandler(async (req, res) => {
  const questions = await Question.find();
  res.status(200).json(questions);
});

/**-------------
* @desc Get One Question
* @router /api/questions/:id
* @method GET
* @access public
-------------*/

const getQuestionById = asyncHandler(async (req, res) => {
  const question = await Question.findOne(req.params._id);
  if (!question) {
    return res.status(404).json({ message: "Question not found" });
  }
  res.status(200).json(question);
});

/**-------------
* @desc Create Question
* @router /api/questions
* @method POST
* @access private
-------------*/

const createNewQuestion = asyncHandler(async (req, res) => {
  const question = await Question.create({
    questionText: req.body.questionText,
    awnsers: req.body.awnsers,
  });
  res.status(201).json(question);
});

/**-------------
* @desc Update Question
* @router /api/questions/:id
* @method PUT
* @access private
-------------*/

const updateQuestion = asyncHandler(async (req, res) => {
  const question = await Question.findById(req.params.id);
  if (!question) {
    return res.status(404).json({ message: "Question not found" });
  }

  const updateQuestion = await Question.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        questionText: req.body.questionText,
        awnsers: req.body.awnsers,
      },
    },
    { new: true }
  );
  res.status(200).json(updateQuestion);
});

/**-------------
* @desc Delete Question
* @router /api/questions/:id
* @method DELETE
* @access private
-------------*/
const deleteQuestion = asyncHandler(async (req, res) => {
  const question = await Question.findById(req.params.id);
  if (!question) {
    return res.status(404).json({ message: "Question not found" });
  }
  await Question.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: "Question deleted successfully" });
});

module.exports = {
  getAllQuestions,
  getQuestionById,
  createNewQuestion,
  updateQuestion,
  deleteQuestion,
};
