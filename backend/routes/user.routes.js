const router = require('express').Router()
const userController = require('../controller/user.controllers')


router.post('/signup', userController.signUp)
router.post('/signin', userController.signIn)
router.post('/auth', userController.auth)

router.get('/pdf', userController.test )

module.exports = router;