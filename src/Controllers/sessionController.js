//Importando model para a verificação de login
const User = require("../Models/user");

module.exports = {
  async store(req, res) {
    //Pega do body email e password
    const { email, password } = req.body;
    //Procura pelo email (parâmetro)
    const user = await User.findOne({ email });
    //Se não encontra
    if (!user) {
      return res.status(400).json({ error: "Usuário não encontrado!" });
    }
    //Se senha errada
    if (!(await user.compareHash(password))) {
      return res.json({ error: "Senha inválida!" });
    }

    const { _id, name, isAdmin } = user;
    //Se tudo ok, dá ao user um token!
    return res.json({
      user: { _id, name, isAdmin, email },
      token: User.generateToken(user)
    });
  }
};