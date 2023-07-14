const HttpError = require("../models/http-error");
const User = require("../models/User");

// const DUMMY_USERS = [
//   {
//     id: "u1",
//     name: "Max Schwarz",
//     email: "test@test.com",
//     password: "testers",
//   },
// ];

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({}, { password: 0 });
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
  // res.json({users: DUMMY_USERS})
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // find user by email 
    const identifiedUser = await User.findOne({ email });
    if(!identifiedUser){
        return res.status(401).json({message: 'Invalid email or password'})
    }
 
    // compare the password 
    // const isPasswordValid = 

    
    // if (!identifiedUser || identifiedUser.password !== password) {
    //   throw new HttpError(
    //     "Could not identify user, credentials seem to be wrong",
    //     401
    //   );
    // }

    
    res.json(identifiedUser);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }


};

exports.login = login;
exports.getUsers = getUsers;
