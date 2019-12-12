//Importações para o controller do Post
const Post = require("../Models/post");
module.exports = {

    //GUARDAR
    async store(req, res){
        const post  = await Post.create(req.body);
        return res.json(post);       
    },
    //LISTAR 1
    async index(req, res) {
        const post = await Post.findOne({ _id: req.params.id });
        return res.json(post);
    },
    //ALTERAR
    async update(req, res) {
        const post = await Post.findByIdAndUpdate(  
            req.params.id,
            req.body,            
            { new: true }
        );
        return res.json(post);
    },
    //EXCLUIR
    async destroy(req,res){        
        await Post.deleteOne({ _id: req.params.id });
        //Mensagem de confirmação (avisa o sucesso da exclusão)
        return res.json({ message: "Exclusão de post realizada com sucesso!" });
    }
}