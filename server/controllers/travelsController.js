const Travel = require('../models/Travel');

exports.WholeTravelsQueries = async (req,res) =>{
    const travels = await Travel.findAll();
    res.render('travels', {
        page: "Next Travels",
        travels
    });
};

exports.singleTravelQuery = async(req,res) =>{
    const travel = await Travel.findByPk(req.params.id);
    res.render('travel', {
        travel
    });
};