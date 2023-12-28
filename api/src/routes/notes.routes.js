const { Router } = require("express");

const notesRoutes = Router();

const NotesController = require("../controllers/NotesController");

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const usersController = new NotesController();

notesRoutes.use(ensureAuthenticated);

notesRoutes.get("/", usersController.index);
notesRoutes.post("/", usersController.create);
notesRoutes.get("/:id", usersController.show);
notesRoutes.delete("/:id", usersController.delete);

module.exports = notesRoutes;
