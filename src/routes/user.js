const router = require('express').Router();
const userController = require('../controllers/user.controller');
const { auth } = require('../utils/middlewares');

router.route('/').get(userController.list);
router.route('/').post(userController.create);
router.route('/:userId').put(auth, userController.update);
router.route('/:userId').get(userController.show);
router.route('/:userId').delete(userController.destroy);

router.route('/signin').post(userController.signin);


module.exports = router;