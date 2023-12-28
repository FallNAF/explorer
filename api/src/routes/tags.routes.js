const { Router } = require("express");

const tagsRoutes = Router();

const TagsController = require("../controllers/TagsController");

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const usersController = new TagsController();

tagsRoutes.use(ensureAuthenticated);

tagsRoutes.get("/", usersController.index);

module.exports = tagsRoutes;
