//Importações para o model do usuário e criptografia do token
const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require("../Config/auth");

//Criação do Schema do User
const UsuariosSchema = new Schema(
    //Atributos do usuário: nome(String), email(String) e senha(String), 
    //e timestamps (created at & updated at)
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
  },
  {
    timestamps: true
  }
);

//Criptografando a senha
UsuariosSchema.pre("save", async function(next) {
  if (!this.isModified("password")) {
    return next();
  }

  this.password = await bcrypt.hash(this.password, 8);
});

//Comparando a senha criptogafada
UsuariosSchema.methods = {
  compareHash(password) {
    return bcrypt.compare(password, this.password);
  }
};

//Gera o token
UsuariosSchema.statics = {
  generateToken({ id }) {
    return jwt.sign({ id }, authConfig.secret, {
      expiresIn: authConfig.ttl
    });
  }
};

//Exportação do modelo User
module.exports = model("Usuarios", UsuariosSchema);