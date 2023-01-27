const router = require('express').Router()
const postController = require('../controller/post.controllers')
const auth = require("../middleware/auth");

router.post('/',auth, postController.savePost)
router.get('/', postController.getPosts)



module.exports = router;