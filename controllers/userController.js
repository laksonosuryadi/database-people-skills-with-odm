const User = require('../models/user');
const dataUser = require('../seeders/user.json'); //requiring seeder file

var seedDataUser = function(req, res) {
  User.collection.insert(dataUser, function(err, results) {
    if(err) {
      res.send(err);
    } else {
      res.send(results)
    }
  })
}

var getUser = function(req, res) {
  User.find(function(err, users) {
    if(err) {
      res.send(err);
    } else {
      res.send(users);
    }
  })
}

var createUser = function(req, res) {
  User.create({
    name: req.body.name
  }, function(err, user) {
    if(err){
      res.send(err)
    } else {
      res.send(user)
    }
  })
}

module.exports = {
  seedDataUser,
  getUser,
  createUser
};
