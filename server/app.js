const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require("mongoose");
// const jsonwebtoken = require("jsonwebtoken")
const cors = require('cors')

const app = express();
const port = 8000;
const HttpError = require("./models/http-error");

const usersRoutes = require('./routes/users-routes');

app.use(bodyParser.json())
app.use(cors())


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


const connectionURL = "mongodb+srv://woldemst:woldemst@twittcluster.av2nweb.mongodb.net/twittWald?retryWrites=true&w=majority";
const connectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

mongoose
    .connect(connectionURL, connectionOptions)
    .then(()=>{
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        })
    })
    .catch((err) => {
        console.log(err)
    })

    

    

    