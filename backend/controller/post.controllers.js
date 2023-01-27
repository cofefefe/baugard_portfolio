const postModel = require('../models/post.models')



exports.getPosts = async (req, res, next) => {
    try {
        const posts = await postModel.find().sort({'createdAt': -1}).populate('poster');
        res.send(posts)
    } catch (e) {
        res.status(500).json({e})
    }
}

exports.savePost = async (req, res, next)=>{
    console.log(req)
    let postObject = req.body.post
    let post = new postModel({
        ...postObject,
        content:req.body.post.content,
        poster: req.body.post.poster,
        createdAt: new Date(),
        updatedAt: new Date(),
    })
    post.save()
        .then(()=>{
            res.status(200).json({message:"enregistrement du post réussi !"})
          })
          .catch((error)=>{
            res.status(420).json({error})
          })
};