exports.homePageQueries = async (req,res) =>{

    const Travel = require('../models/Travel');
    const Comment = require('../models/Comment');

    const travels = await Travel.findAll({limit: 3});

    const comments = await Comment.findAll({limit: 3});

    res.render('index', {
        page: "Next Travels",
        travels,
        comments,
        classType: 'home'
    })
}