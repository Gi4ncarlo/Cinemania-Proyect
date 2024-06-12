const {Router} = require('express');
const moviesController = require("../controllers/Moviescontroller")

const moviesRouter = Router();

moviesRouter.get("/" , moviesController.getMovies)


module.exports = moviesRouter;