//Importações para o model do post
const { Schema, model } = require("mongoose");

//Criação do Schema do Post
const PostSchema = new Schema(
    //Atributos do post: título(String), conteudo(String) 
    //e timestamps (created at & updated at)
  {
    titulo: {
      type: String,
      required: true
    },
    conteudo: {
      type: String,
      required: true
    },
  },
  {
    timestamps: true
  }
);

//Exportação do modelo Post
module.exports = model("Post", PostSchema);