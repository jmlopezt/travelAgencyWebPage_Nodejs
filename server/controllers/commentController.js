const Comment = require('../models/Comment');

exports.sharingExperience = async (req,res) =>{
    let {name, email, message} = req.body;

    let errors = [];

    if (!name){
        errors.push({'message' : 'Add your name'});
    }
    if (!email){
        errors.push({'message' : 'Add your email'});
    }
    if (!message){
        errors.push({'message' : 'Add your message'});
    }
    if (errors.length > 0) {
        const comments = await Comment.findAll();
        res.render('comments', {
            errors,
            name,
            email,
            message,
            page: 'Comment Page',
            comments
        });
    } else {
        await Comment.create({
            name,
            email,
            message
        })
        res.redirect('/comments');
    }
};


exports.homePageQuerying = async (req,res) =>{
    const comments = await Comment.findAll();
    res.render('comments', {
        page: "Comment Page",
        comments
    });
};