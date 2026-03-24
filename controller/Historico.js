const Historico = require ('../models/Historico');


module.exports ={
    async create (req,res){
        try{
            const {id_medicacao, nome_medicacao, dose_atual, tempo_entre_doses, proxima_dose} = req.body
            
            const historicoMed = await Historico.create({
                nome_medicacao,id_medicacao,proxima_dose,dose_atual,tempo_entre_doses
            })
            res.status(201).json(historicoMed)
        } catch(error) {
            res.status(500).json({
                error: error.message,
            })
        }
    },
    async list (req, res){
        
    }
}