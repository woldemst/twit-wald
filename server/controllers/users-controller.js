const HttpError = require("../models/http-error");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const API_URL = "http://localhost:8000/api";

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({}, { password: 0 });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

const register = async (req, res, next) => {
  // destructuring assignment from body
  const { userName, email, password } = req.body;

  // check if a user with the same email exists using the User model
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    const error = new HttpError(
      "Signing up failed, please try agail later.",
      500
    );
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError(
      "User exist already, please login instead.",
      422
    );
    return next(error);
  }

  // hashing the password
  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    const error = new HttpError(
      "Could not create user, pleadse try again.",
      500
    );
    return next(error);
  }

  //create new user

  const createdUser = new User({
    name: userName,
    email: email,
    password: hashedPassword,
    // tweets: [],
  });

  try {
    await createdUser.save(); 
  } catch (err) {
    const error = new HttpError(
      "Signing up failed, please try again later.",
      500
    );
    return next(error);
  }

  let token;

  try {
    token = jwt.sign(
      {userId: createdUser.id, email: createdUser.email},
      'secret-super-key',
      {expiresIn: '1h'}
      
    )
  } catch (err) {
    const error = new HttpError(
      "Signing up failed, please try again later.",
      500
    );
    next(error)
  }

  res
  .status(201)
  .json({userId: createdUser.id, email: createdUser.email})
};

const login = async (req, res, next) => {

    const { email, password } = req.body;

    let identifiedUser;

    try {
      // find user by email
      identifiedUser = await User.findOne({ email });      
    } catch (err) {
      const error = new HttpError(
        'Logging in failed, please try again later.',
        500
      );

      return next(error)
    }


    if (!identifiedUser) {
      const error = new HttpError(
        'Invalid credentials, could not log you in.',
        401
      );
      return next(error)
    }

    // compare the password
    let isValidPassword = false;
    try {
      isValidPassword = await bcrypt.compare(password, identifiedUser.password);
      
    } catch (err) {
      const error = new HttpError(
        'Could not log you in, please check your credentials and try again.',
        500
      );
      return next(error);
    }

    if (!isValidPassword) { 
      const error = new HttpError(
        'Invalid credentials, could not log you in.',
        403
      );
      return next(error);
    }

    let token;

    try {
      token = jwt.sign(
        {userId: identifiedUser.id, email: identifiedUser.email},
        'super-secret-key',
        {expiresIn: '1h'}
      )
    } catch (err) {
      const error = new HttpError(
        'Logging in failed, please try again later.',
        500
      );
      next(error)
    }

    // const token = generateJwtToken(identifiedUser._id)
    // res.json({token})

    res.json({
        userId: identifiedUser.id, 
        email: identifiedUser.email,
        token: token
     });
};

exports.getUsers = getUsers;
exports.register = register;
exports.login = login;
