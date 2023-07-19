const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      minlingth: 4,
      maxlingth: 99,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlingth: 4,
      maxlingth: 99,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlingth: 8,
    },
  },
  { timestamps: true }
);

// Generate Auth token
UserSchema.methods.generateAuthToken = function () {
  return jwt.sign({ id: this._id }, process.env.SECRET_KEY, {
    expiresIn: "15d",
  });
};

//Validate Data
const validateNewUser = (obj) => {
  const schema = Joi.object({
    userName: Joi.string().min(4).max(99).trim().required(),
    email: Joi.string().email().min(4).max(99).trim().required(),
    password: Joi.string().min(8).trim().required(),
  });
  return schema.validate(obj);
};

const validateLoginUser = (obj) => {
  const schema = Joi.object({
    userName: Joi.string().min(4).max(99).trim().required(),
    password: Joi.string().min(8).trim().required(),
  });
  return schema.validate(obj);
};

const User = mongoose.model("User", UserSchema);
module.exports = { User, validateNewUser, validateLoginUser };
