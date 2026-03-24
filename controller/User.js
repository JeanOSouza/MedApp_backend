const User = require("../models/User");
const Medicacao = require('../models/Medicacao')

module.exports = {

  // 🔹 CREATE
  async create(req, res) {
    try {
      const { nome, email, senha } = req.body;

      if (!nome || !email || !senha) {
        return res.status(400).json({
          message: "Preencha todos os campos",
        });
      }

      const user = await User.create({
       
        nome,
        email,
        senha,
      });

      res.status(201).json(user);

    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  },

  // 🔹 LIST
  async list(req, res) {
    try {
      const users = await User.findAll({
        include: [{ model: Medicacao }],
      });

      res.json(users);

    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  },


  // 🔹 GET BY ID
  async getById(req, res) {
    try {
      const id = req.params.id;

      const user = await User.findOne({
  where: { id_usuario: id }
});

      res.json(user);

    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  },

  // 🔹 UPDATE
  async update(req, res) {
    try {
      const id = req.params.id;
      const { nome, email, senha, idade, comorbidades } = req.body;

      await User.update(
        { nome, email, senha, idade, comorbidades },
        {
          where: { id_usuario: id }, // 🔥 corrigido
        }
      );

      const userAtualizado = await User.findByPk(id);

      res.json(userAtualizado);

    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  },

  // 🔹 DELETE
  async delete(req, res) {
    try {
      const id = req.params.id;

      await User.destroy({
        where: { id_usuario: id }, // 🔥 corrigido
      });

      res.json({
        message: "Usuario apagado",
      });

    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  },

};