const express = require('express');
const router = express.Router();
const { getUser, createUser, getUserTask } = require('../controllers/userController');

router.get('/', getUser);
router.get('/task', getUserTask)
router.post('/create', createUser);

module.exports = router;