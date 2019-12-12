//Importaoes necessárias para a configuração do servidor
const express = require("express");
const mongoose = require("mongoose");
const server = express();
const cors = require("cors");

//Conexão do banco e servidor
mongoose.connect('mongodb://localhost:27017/prototipo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

server.use(express.json());
//Pegando as rotas do GRUDE
const routes = require("./routes");
//Pasando para o servidor
server.use(routes);
server.use(cors());
server.use(express.json());
//Porta do localhost
server.listen(3336);