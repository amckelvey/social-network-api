const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, trim: true },
  email: { type: String, required: true },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'thought',
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  ],
},
{
  toJSON: {
    virtuals: true,
  },
  id: false,
}
);

userSchema
  .virtual('friendCount')
  .get(function () {
    return this.friends.length;
  });

const User = mongoose.model('User', userSchema);

module.exports = User;

