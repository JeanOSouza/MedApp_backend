const express = require("express");
const router = express.Router();

const medicacaoController = require("../controller/Medicacao");

router.post("/Medicacao", medicacaoController.create);
router.get("/Medicacao", medicacaoController.list);
router.get("/Medicacao/:id_usuario",async (Request,res) =>{
    try{
        const {id_usuario} = Request.params;
    const Medicacao=await Medicacao.findAll({where:{id_usuario:id_usuario}});
    res.json(Medicacao);
}catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}); //para pegar de um usuario específico


router.put("/Medicacao/:id", medicacaoController.update);
router.delete("/Medicacao/:id", medicacaoController.delete);

module.exports = router;
