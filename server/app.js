const express = require("express");
const mongoose = require("mongoose");
// const jsonwebtoken = require("jsonwebtoken")
const bodyParser = require("body-parser")
const app = express();

const usersRoutes = require('./routes/users-routes')

app.use(bodyParser.json)



// app.use('/api/users', usersRoutes)


app.use((error, req, res, next) => {
    if(res.headerSent){
        return next(error)
    }
    res.status(error.code || 500)
    res.json({message: error.message || 'An uknown error occured!'})
})


app.listen(8000)


// mongoose
//     .connect(
//     "mongodb+srv://woldemst:WeinertW1480@twittcluster.av2nweb.mongodb.net/?retryWrites=true&w=majority",
//     {
//         useNewUrlParser: true,
//         useUnifieldTopology: true,
//         writeConcern: { w: "majority" },
//     }
//     )
//     .then(()=>{
//         app.listen(8000)
//         console.log("port connected");
//     })
//     .catch((err) => {
//         console.log(err)
//     })



