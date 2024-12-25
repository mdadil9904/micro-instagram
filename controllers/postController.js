const Post = require('../models/post')
const User = require('../models/user')

exports.getAllPosts = async (req, res) => {
    try{
        const posts = await Post.findAll({include: User});
        res.status(200).json(posts);
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

exports.createPost = async(req, res) => {
    const { userId, title, description, images } = req.body;
    try{
        const user = await User.findByPk(userId);
        if(!user) return res. status(404).json({message: 'User not found'});

        const post = await Post.create({ userId, title, description, images});
        user.postCount += 1;
        await user.save();

        res.status(201).json(post);
    } catch(error){
        res.status(500).json({error: error.message});
    }
};

exports.editPost = async (req, res) => {
    const { id } = req.params;
    const { title, description, images } = req.body;
    
    try{
        const post = await Post.findByPk(id);
        if(!post) return res.status(404).json({message: 'Post not found'});

        post.title = title;
        post.description = description;
        post.images = images;
        await post.save();

        res.status(200).json(post);
    } catch(error){
        res.status(500).json({error: error.message});
    }
};

exports.deletePost = async(req, res) => {
    const { id } = req.params;

    try{
        const post = await Post.findByPk(id);
        if(!post) return res.status(404).json({message: 'Post not found'});

        const user = await User.findByPk(post.userId);
        user.postCount -= 1;
        await user.save();

        await post.destroy();
        res.status(204).end();
    } catch(error){
        res.status(500).json({error: error.message});
    }
};