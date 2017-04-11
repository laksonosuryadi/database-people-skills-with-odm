const peopleSkill = require('../models/userskill')

let getUserSkill = function(req, res) {
  peopleSkill.find()
    .populate('user','name')
    .populate('skillList.skill','name')
    .exec(function(err, results){
     if (err) {
       res.send(err.message);
     } else {
       res.send(results);
     }
    })
}

let createUserSkill = function(req, res) {
  //check if user already exist or not
  peopleSkill.findOne({user:req.body.user}, function(err, userSkill){
    if(err) {
      res.send(err);
    } else {
      if(userSkill) {

        //check if skill already exist or not
        let flag = 0;
        userSkill.skillList.forEach(function(skillFound) {
          if(skillFound.skill == req.body.skill) {
            flag = 1;
          }
        })

        if(flag > 0) {
          res.send('User can not have duplicate skill.');
        } else {
          peopleSkill.update({_id: userSkill._id},{
            $push: {
              skillList: {skill:req.body.skill,point:req.body.point}
            }
          },{
            safe:true,
            upsert:true,
            new:true
          }, function(err) {
            if(err) {
              res.send(err);
            } else {
              res.send('New skill added!')
            }
          })
        }
      } else {
          peopleSkill.create({
            user: req.body.user,
            skillList: [{skill:req.body.skill,point:req.body.point}]
          }, function(err, user) {
            if(err){
              res.send(err)
            } else {
              res.send('New data has been created.')
            }
          })
      }
    }
  })
}

module.exports = {
  getUserSkill,
  createUserSkill
};
