const router = require('express').Router();
const voteController = require('../controllers/vote.controller');
const { auth } = require('../utils/middlewares');

router.route('/').get(voteController.list);  //Muestra todos
router.route('/').post(auth, voteController.create);
router.route('/testing').get(voteController.test); 

router.route('/:userId').get(voteController.showVotesUser);  //Muestra votos por usuario

module.exports = router;