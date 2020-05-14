const express = require('express');
const router = express.Router();

const weController = require('../controllers/weController');
const homeController = require('../controllers/homeController');
const travelsController = require('../controllers/travelsController');
const commentController = require('../controllers/commentController');

module.exports = function () {
    router.get('/', homeController.homePageQueries);
    router.get('/we', weController.aboutUs);
    router.get('/travels', travelsController.WholeTravelsQueries);
    router.get('/travels/:id', travelsController.singleTravelQuery);
    router.post('/comments', commentController.sharingExperience);
    router.get('/comments', commentController.homePageQuerying);
    return router;
}