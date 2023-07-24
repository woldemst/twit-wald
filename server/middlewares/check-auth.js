// const jwt = require('jsonwebtoken')
// const HttpError = require('../models/http-error')

// const checkAuth = (req, res, next) => {
//     try{
//         const token = req.headers.authorization.split(' ')[1];
//         if(!token) {
//             throw new HttpError("Authentication failed",401)
//         }

//         const decodedToken = jwt.verify(token, 'super-secret-key')
//         req.userData = { userId: decodedToken.userId}
//         next()
//     }catch(err){
//         const error
//     }
// }