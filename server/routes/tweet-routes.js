const express = require("express")

const router = express.Router()

const tweetController = require("")

router.get('/', tweetController.getAllTweets)

module.exports = router;