//controller feito para autenticação

const users = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

module.exports = {
  async registrar(req, res) {
    const { nome, email, senha } = req.body;
    const senhaHash = await bcrypt.hash(senha, 8);

    const user = {
      id_usuario: users.length + 1,
      nome,
      email,
      senha: senhaHash,
    };
    users.push(user);

    return res.json({ message: "Usuario criado" });
  },
  async login(req, res) {
    const { email, senha } = req.body;

    const user = users.find((u) => u.email === email);

    if (!user) {
      return res.status(404).json({ message: "Usuario nao encontrado" });
    }

    const senhaValida = await bcrypt.compare(senha, user.senha);
    if (!senhaValida) {
      return res.status(401).json({ message: "Senha invalida" });
    }

    const token = jwt.sign({ id: user.id }, "segredo", { expiresIn: "1h" });
    return res.json({ token });
  },
};
