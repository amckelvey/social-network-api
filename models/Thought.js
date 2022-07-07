const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
  thoughtText: { type: String, required: true, minLength: 1, maxLength: 280 },
  createdAt: { type: Date, default: Date.now },
  username: { type: String, required: true },
  reactions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'reaction'
    }
  ]
});

thoughtSchema
  .virtual('friendCount')
  .get(function () {
    return this.friends.count;
  });

const User = mongoose.model('User', userSchema);

