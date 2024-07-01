const {Router} = require('express');
const moviesController = require("../controllers/moviesController");
const validateForm = require("../middlewares/validateForm");

const moviesRouter = Router();

moviesRouter.get("/" , moviesController.getallMovies);
moviesRouter.post("/createMovie" , validateForm, moviesController.postMovie);

module.exports = moviesRouter;