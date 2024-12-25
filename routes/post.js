const express = require('express')
const {
    getAllPosts,
    createPost,
    editPost,
    deletePost,
} = require('../controllers/postController')

const router = express.Router();

router.get('/', getAllPosts)
router.post('/', createPost)
router.put('/', editPost)
router.delete('/', deletePost)

module.exports = router;