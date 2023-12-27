const express = require('express');
const userController = require('../controllers/user.controller');
const groupController = require('../controllers/group.controller');
const memberController = require('../controllers/member.controller');
const foodController = require('../controllers/food.controller');
const marketController = require('../controllers/market.controller');

const router = express.Router();

// user
router.get('/user', userController.getAll);
router.post('/login', userController.login);

// group
router.get('/group/:idUser', groupController.getAll);
router.post('/group/add', groupController.add);

// member
router.post('/member/add', memberController.add)
router.post('/member/delete', memberController.delete)

// food
router.post('/food', foodController.getAll);
router.post('/food/add', foodController.add);
router.get('/food/delete/:idFood', foodController.delete);

// market
router.get('/market/:idUser', marketController.getAll);
router.post('/market/add', marketController.add);

module.exports = router
