const {
  registerUserController,
  loginUserController,
} = require("../controllers/authController");
const verifyToken = require("../middlewares/authinticate");
const router = require("express").Router();

router.post("/register", verifyToken, registerUserController);
router.post("/login", loginUserController);

module.exports = router;
