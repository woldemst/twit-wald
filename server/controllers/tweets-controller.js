const HttpError = require('../models/http-error')
const Tweet = require('../models/Tweet')

const getAllTweets = async (req, res, next) => {
    try {
        const tweets = await Tweet.find()
        res.json(tweets)
    } catch (err) {
        const error = new HttpError(
            "Fetch the tweets failed, please try agail later.",
            500
        )
        return next(error)
        
    }
}

exports.getAllTweets = getAllTweets;