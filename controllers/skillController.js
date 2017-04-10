const Skill = require('../models/skill');
const dataSkill = require('../seeders/skill.json'); //requiring seeder file

var seedDataSkill = function(req, res) {
  Skill.collection.insert(dataSkill, function(err,results) {
    if(err) {
      res.send(err);
    } else {
      res.send(results)
    }
  })
}

var getSkill = function(req, res) {
  Skill.find(function(err, skills) {
    if(err) {
      res.send(err);
    } else {
      res.send(skills);
    }
  })
}

var createSkill = function(req, res) {
  Skill.create({
    name: req.body.name
  }, function(err, skill) {
    if(err){
      res.send(err)
    } else {
      res.send(skill)
    }
  })
}

module.exports = {
  seedDataSkill,
  getSkill,
  createSkill
};
