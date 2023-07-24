const express = require("express")

const router = express.Router()

const tweetController = require("../controllers/tweets-controller")

router.get('/', tweetController.getAllTweets)

module.exports = router;