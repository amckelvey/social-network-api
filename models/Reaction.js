const { ObjectId } = require('bson');
const { builtinModules } = require('module');
const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
  reactionId: { type: ObjectId },
  reactionBody: { type: String, required: true, maxLength: 280 },
  username: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = reactionSchema;