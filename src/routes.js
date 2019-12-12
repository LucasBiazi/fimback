//Importações necessária para o GRUDE (user e post)
const express = require("express");
const routes = express.Router();
const UserController = require("./Controllers/userController");
const PostController = require("./Controllers/postController");
const SessionController = require("./Controllers/sessionController");
const authMiddleware = require("./Middlewares/auth");
const authorizationMiddleware = require("./Middlewares/authorization");

//PARA USUÁRIO
//Caminho do cadastro
routes.post("/sessions", UserController.store);
//Caminho do FIND
routes.get("/users/:email", UserController.index);
//Caminho LIST
routes.get("/list", UserController.list);

//PARA POST
//Caminho do FIND
routes.get("/post/:id", PostController.index);
//Cadastro
routes.post("/post", PostController.store);
//Apagar
routes.delete("/post/:id", PostController.destroy);

//Exportando as rotas
module.exports = routes;