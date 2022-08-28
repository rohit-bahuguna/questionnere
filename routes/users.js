var express = require('express');
var router = express.Router();
var {register ,login , saveUserData , getData  ,  addData} = require('../controllers/userServices');
var verifyToken = require('../auth/verifyToken');



router.post('/register', register);

router.post('/login', login);

router.post('/saveuserdata', verifyToken, saveUserData)
 
router.get('/getdata' , getData)

router.post('/adddata' , addData)




module.exports = router;
