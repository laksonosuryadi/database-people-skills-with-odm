const router = require('express').Router();
const user = require('../controllers/userController');
const skill = require('../controllers/skillController');
const userSkill = require('../controllers/userSkillController');

//ROUTE CONNECTION TESTING
// router.get('/', (req, res) => {
//   res.send('Testing');
// })

//GET USERS, SKILLS, USERS-SKILLS
router.get('/users', user.getUser);
router.get('/skills', skill.getSkill);
router.get('/userskills', userSkill.getUserSkill);

//CREATE USERS, SKILLS, USERS-SKILLS
router.post('/users', user.createUser);
router.post('/skills', skill.createSkill);
router.post('/userskills', userSkill.createUserSkill);

//SEEDERS
router.get('/skills/seed', skill.seedDataSkill); //this seeder routing only run ONCE !
router.get('/users/seed', user.seedDataUser); //this seeder routing only run ONCE !

module.exports = router;
