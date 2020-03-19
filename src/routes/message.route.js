const router = require('express').Router();
const messagesController = require('../controllers/message.controller');

router.route('/').get(messagesController.find);
router.route('/').post(messagesController.create);

module.exports = router;
