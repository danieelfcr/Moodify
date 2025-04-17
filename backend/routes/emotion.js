var express = require('express');
var router = express.Router();
const emotionController = require('../controllers/emotion.controller')

/* POST: Analyze emotion */
router.post('/detect-emotion', emotionController.detectEmotion);

module.exports = router;