const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'thoughts',
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  ],
});