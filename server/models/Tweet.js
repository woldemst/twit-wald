const mongoose = require('mongoose')

const tweetShema = new mongoose.Schema({
    creatorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      postedDate: {
        type: Date,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      imageUrl: {
        type: String,
        required: true,
      },
})

module.exports = mongoose.model("Tweet", tweetShema)