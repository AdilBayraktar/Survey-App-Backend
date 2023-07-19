const asyncHandler = require("express-async-handler");
const { Response } = require("../models/Reponse");

/**-------------
* @desc Get All Responses
* @router /api/responses
* @method GET
* @access private
-------------*/
const getAllResponses = asyncHandler(async (req, res) => {
  const response = await Response.find();
  res.status(200).json(response);
});

/**-------------
* @desc Get One Response
* @router /api/responses/:id
* @method GET
* @access private
-------------*/
const getResponseById = asyncHandler(async (req, res) => {
  const response = await Response.findById(req.params._id);
  if (!response) {
    return res.status(404).json({ message: "Response not found" });
  }
  res.status(200).json(response);
});

/**-------------
* @desc Send Response by Guest
* @router /api/responses
* @method POST
* @access public
-------------*/

const sendResponse = asyncHandler(async (req, res) => {
  const response = await Response.create({
    guestName: req.body.guestName,
    answers: req.body.answers,
  });
  res.status(201).json(response);
});

module.exports = { getAllResponses, getResponseById, sendResponse };
