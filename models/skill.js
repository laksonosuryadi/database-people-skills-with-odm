const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var skillSchema = new Schema({
  name: {
    type: String,
    unique: true
  }
})

var Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;
