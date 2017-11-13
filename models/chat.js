var mongoose = require('mongoose');

var ChatSchema = new mongoose.Schema({
  room: String,
  nickname: String,
  message: String,
},
{
  timestamps: true
});

module.exports = mongoose.model('Chat', ChatSchema);