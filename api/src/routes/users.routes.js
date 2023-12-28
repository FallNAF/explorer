const { Router } = require("express");

const usersRoutes = Router();

const multer = require("multer");

const uploadConfig = require("../configs/upload");

const upload = multer(uploadConfig.MULTER);

const UsersController = require("../controllers/UsersController");

const UserAvatarController = require("../controllers/UserAvatarController");

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const usersController = new UsersController();

const userAvatarController = new UserAvatarController();

usersRoutes.post("/", usersController.create);

usersRoutes.put("/", ensureAuthenticated, usersController.update);

usersRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  upload.single("avatar"),
  userAvatarController.update
);

module.exports = usersRoutes;

/*Route Parms é obrigatório, é utilizado no link com o :nome

app.get("/message/:id", (request, response) => {
  const { id } = request.params;
  response.send(`Mensagem ID: ${id}`);
});

*/

//Query Params é opcional, é separado inicialmente pelo ?chave=valor
/*

app.get("/users", (request, response) => {
  const { page, limit } = request.query;

  response.send(`Pagina: ${page}. Limite: ${limit}`);
});

*/
