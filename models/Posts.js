const mongoose = require('mongoose');

//User Schema
const PostSchema = mongoose.Schema({
  Title: {
    type: String,
    required: true
  },
  Content: {
    type: String,
    required: true
  },
  ShortContent: {
    type: String,
    required: true
  },
  Image: {
    type: String,
    required: true
  },
  UserId: {
    type: String,
    required: true
  },
  Views: {
    type: Number,
    required: true
  },
  NoOfComments: {
    type: Number,
    required: true
  },
  CreatedAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  PostNo: {
    type: Number,
    required: true
  },
  Comments: {
    type: [{
      UserId: {
        type: String,
        required: true
      },
      CommentContent: {
        type: String,
        required: true
      }
    }]
  }
});

const User = module.exports = mongoose.model('Post', PostSchema);
