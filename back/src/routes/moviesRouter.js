const {Router} = require('express');
const moviesController = require("../controllers/Moviescontroller");
const moviesService = require('../services/moviesService');

const moviesRouter = Router();

moviesRouter.get("/" , moviesController.getallMovies)

module.exports = moviesRouter;