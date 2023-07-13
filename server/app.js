const express = require("express");
const bodyParser = require("body-parser")
// const mongoose = require("mongoose");
// const jsonwebtoken = require("jsonwebtoken")
const app = express();
const port = 8000;
const HttpError = require("./models/http-error");

const usersRoutes = require('./routes/users-routes');

app.use(bodyParser.json())


// Routes 
app.use('/api/users', usersRoutes)

app.use((req, res, next) => {
    const error = new HttpError('Could not find this route.', 404);
    throw error;
})

app.use((error, req, res, next) => {
    if(res.headerSent){
        return next(error)
    }
    res.status(error.code || 500)
    res.json({message: error.message || 'An uknown error occured!'})
})



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})


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



