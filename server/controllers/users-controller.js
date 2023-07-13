const HttpError = require("../models/http-error");

const DUMMY_USERS = [
  {
    id: "u1",
    name: "Max Schwarz",
    email: "test@test.com",
    password: "testers",
  },
];


const getUsers = (req, res, next)=>{
    res.json({users: DUMMY_USERS})
}


const login = (req, res, next) => {
  const { email, password } = req.body;

  const identifiedUser = DUMMY_USERS.find((u) => u.email === email);
  if (!identifiedUser || identifiedUser.password !== password) {
    throw new HttpError(
      "Could not identify user, credentials seem to be wrong",
      401
    );
  }

  res.json({ message: "Logges in !" });
};

exports.login = login;
exports.getUsers = getUsers;
