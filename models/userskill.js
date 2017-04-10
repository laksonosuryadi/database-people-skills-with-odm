const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSkillSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  skillList: [
    {
      skill:{
        type: Schema.Types.ObjectId,
        ref: 'Skill'
      },
      point: Number
    }
  ]

})

var UserSkill = mongoose.model('UserSkill', userSkillSchema);

module.exports = UserSkill;
