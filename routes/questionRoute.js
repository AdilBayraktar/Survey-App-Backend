const {
  getAllQuestions,
  createNewQuestion,
  getQuestionById,
  deleteQuestion,
  updateQuestion,
} = require("../controllers/questionController");
const verifyToken = require("../middlewares/authinticate");

const router = require("express").Router();

router.get("/", getAllQuestions);
router.post("/", verifyToken, createNewQuestion);
router.get("/:id", getQuestionById);
router.put("/:id", verifyToken, updateQuestion);
router.delete("/:id", verifyToken, deleteQuestion);
module.exports = router;
