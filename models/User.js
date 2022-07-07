const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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

userSchema
  .virtual('friendCount')
  .get(function () {
    return this.friends.count;
  });

const User = mongoose.model('User', userSchema);

