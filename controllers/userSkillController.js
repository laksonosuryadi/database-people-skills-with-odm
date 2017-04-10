const peopleSkill = require('../models/userskill')

let getUserSkill = (req, res) => {
  peopleSkill.find()
    .populate('user','name')
    .populate('skillList.skill','name')
    .exec((err, results) => {
     if (err) {
       res.send(err.message);
     } else {
       res.send(results);
     }
    })
}

let createUserSkill = (req, res) => {
  //check if user already exist
  peopleSkill.findOne({user:req.body.user},(err, userSkill) => {
    if(err) {
      res.send(err);
    } else {
      if(userSkill) {

        //check if skill already exist
        let counter = 0;
        userSkill.skillList.forEach((skillOne) => {
          if(skillOne.skill == req.body.skill) {
            counter = 1;
          }
        })

        if(counter > 0) {
          res.send('user can not have duplicate skill');
        } else {
          peopleSkill.update({_id: userSkill._id},{
            $push: {
              skillList: {skill:req.body.skill,point:req.body.point}
            }
          },{
            safe:true,
            upsert:true,
            new:true
          },(err) => {
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
              res.send('New data has been created')
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
