const router = require('express').Router();
const user = require('../controllers/userController');
const skill = require('../controllers/skillController');
const userSkill = require('../controllers/userSkillController');

//get data
// router.get('/', (req, res) => {
//   res.send('Testing');
// })

//USERS
router.get('/users', user.getUser);
router.get('/users/seed', user.seedDataUser); //this seeder routing only run ONCE !

//SKILLS
router.get('/skills', skill.getSkill);
router.get('/skills/seed', skill.seedDataSkill); //this seeder routing only run ONCE !


//USERS-SKILLS
router.get('/userskills', userSkill.getUserSkill);


//create data
router.post('/users', user.createUser);
router.post('/userskills', userSkill.createUserSkill)


module.exports = router;
