const { login, signup } = require('../controller/auth')

const router=require('express').Router()

router.post('/register',signup)
router.post('/login',login)


module.exports=router;