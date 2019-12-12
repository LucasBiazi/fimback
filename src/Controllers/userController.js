//Importações para o controller do user
const User = require("../Models/user");
module.exports = {

    //GUARDAR
    async store(req, res){
        const { email } = req.body;       
        //Verifica se já não existe um com o mesmo email, caso não, cadastra!
        if (await User.findOne({ email })) {
            return res.status(400).json({ error: "Já existe um usuário com este email!" });
          }
            const user  = await User.create(req.body);
            return res.json(user);       
    },
    //LISTAR 1
    async index(req, res) {
        const user = await User.findOne({ email: req.params.email });
        return res.json(user);
    },
    //ALTERAR
    async update(req, res) {
        const user = await User.findByIdAndUpdate(  
            req.params.id,
            req.body,            
            { new: true }
        );
        return res.json(user);
    },
    //EXCLUIR
    async destroy(req,res){        
        await User.deleteOne({ _id: req.params.id });
        //Mensagem de confirmação (avisa o sucesso da exclusão)
        return res.json({ message: "Exclusão realizada com sucesso!" });
    },
    //LISTAR
    async list(req, res) {
        const user = await User.find({});
        return res.json(user);
    }
}