//Importações para a verificação de adm
const User = require("../Models/user");
//Arrow function que pergunta se User é adm
module.exports = async (req, res, next) => {
  const user = await User.findById(req.userId);

  if (user.isAdmin) {
    return next();
  }

  return res.status(401).json({ error: "Unauthorized user" });
};