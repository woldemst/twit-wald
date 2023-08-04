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

const getUserById = async (req, res, next) => {
  const userId = req.params.userId;

  let user;

  try {
    user = await User.findById(userId)
    
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find user, please try again.",
      500 
    );
    return next(error);
  }

  if (!user){
    const error = new HttpError(
      "Could not find user for the provided id.",
      404 
    );
    return next(error);
  }

  res.json({user: user.toObject({getters: true})})
}

const register = async (req, res, next) => {
  // destructuring assignment from body
  const { userName, email, password, birthYear, birthMonth, birthDay} = req.body;

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

  // get today's date 
  // Get today's date
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString('en-US', { month: 'long', year: 'numeric' });

  //create new user
  const createdUser = new User({
    name: userName,
    email: email,
    password: hashedPassword,
    birthYear: birthYear, 
    birthMonth: birthMonth,
    birthDay: birthDay,
    joinedDate: formattedDate

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
  .json({
    userId: createdUser.id, 
    email: createdUser.email,
    token: token
  })
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

const updateUser = async (req, res, next) => {
  const userId = req.params.userId;

  // const {userName, birthYear, birthMonth, birthDay,  bio, location, link} = req.body;
  const {userName} = req.body;

  let userToUpdate; 
  try {
    userToUpdate = await User.findById(userId)

  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find user, please try again.",
      500 
    );
    return next(error);
  }

  if (!userToUpdate){
    const error = HttpError('User not found.', 404)
    return next(error)
  }

  userToUpdate.name = userName;
  // userToUpdate.birthYear = birthYear;
  // userToUpdate.birthMonth = birthMonth;
  // userToUpdate.birthDay = birthDay; 
  // userToUpdate.bio = bio; 
  // userToUpdate.location = location; 
  // userToUpdate.link = link; 


  try {
    await userToUpdate.save()
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update user, please try again.",
      500 
    );
    return next(error);
  }

  res
  .status(200)
  .json({message: 'User successfuly updated.', user: userToUpdate })
}

exports.getUsers = getUsers;
exports.getUserById = getUserById;
exports.register = register;
exports.login = login;
exports.updateUser = updateUser; 
