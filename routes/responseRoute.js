const {
  getAllResponses,
  sendResponse,
  getResponseById,
} = require("../controllers/responseController");
const verifyToken = require("../middlewares/authinticate");

const router = require("express").Router();

router.get("/", verifyToken, getAllResponses);
router.post("/", sendResponse);
router.get("/:id", verifyToken, getResponseById);

module.exports = router;
