const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const medicacaoController = require("../controller/Medicacao");

router.post("/Medicacao", auth, medicacaoController.create);
//router.get("/Medicacao", medicacaoController.list);
router.get("/Medicacao", auth, medicacaoController.listByUser);

router.put("/Medicacao/:id", medicacaoController.update);
router.delete("/Medicacao/:id", medicacaoController.delete);

module.exports = router;
