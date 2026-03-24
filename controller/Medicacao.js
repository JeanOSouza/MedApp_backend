const Medicacao = require("../models/Medicacao");

module.exports = {
  async create(req, res) {
    try {
      const { nome_medicacao, dosagem, descricao, id_usuario, inicio_medicacao } = req.body;

      const medicacao = await Medicacao.create({
        nome_medicacao,
        dosagem,
        descricao,
        id_usuario,
        inicio_medicacao
      });
        console.log('Registro Criado', medicacao)
      res.status(201).json(medicacao);
    } catch (error) {
      console.log(error)
      res.status(500).json({
        error: error.message,
      });
    }
  },
  async list(req, res) {
    try {
      const medicacao = await Medicacao.findAll();

      res.json(medicacao);
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  },
  async update(req, res) {
    try {
      const id = req.params.id;
      const { nome_medicacao, descricao, dosagem, id_usuario } = req.body;

      await Medicacao.update(
        { nome_medicacao, dosagem, descricao, id_usuario },
        { where: { id_medicacao: id } },
      );
      const medicacaoAtualizada = await Medicacao.findByPk(id);
      res.json(medicacaoAtualizada);
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  },

  async delete(req, res) {
    try {
      const id = req.params.id;

      await Medicacao.destroy({
        where: { id_medicacao: id },
      });
      res.json({
        message: "Medaicametno apagado",
      });
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  },
};
