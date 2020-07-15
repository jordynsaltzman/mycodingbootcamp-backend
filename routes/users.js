const express = require("express");
const router = express.Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Joi = require("@hapi/joi");
require("../db");

router.post("/register", async (req, res) => {
  //validate the data before making a user

  const schema = Joi.object({
    firstName: Joi.string(),
    lastName: Joi.string(),
    email: Joi.string().email(),
    password: Joi.string().min(6),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //make sure user isnt already in the database

  const user = await User.find({ email: req.body.email });

  if (user.length) {
    return res.status(400).send("Email already exists");
  }

  //hash the password
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(req.body.password, salt);

  const userData = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hashedPassword,
  });

  let userDoc = await userData.save();

  res.send(userDoc);
});

router.post("/login", async (req, res) => {
  //validate the data before loggin in user
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //make sure user is in the database
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email is not found.");

  //check if password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Invalid password.");

  //create and assign a token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  console.log(user);

  let userData = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    token: token,
  };

  res.send(userData);
});

module.exports = router;
