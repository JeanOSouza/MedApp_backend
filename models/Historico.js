const conn = require('../database/conn')
const {DataTypes, Sequelize}  = require('sequelize')

const Historico = conn.define('historico',{
    id_histMed:{
        type:DataTypes.INTEGER,
        require:true
    },
    id_medicacao:{
        type:DataTypes.INTEGER,
        require:true
    },
    nome_medicação:{
        type: DataTypes.STRING,
        alownull:false
    },
    dose_atual:{
        type:DataTypes.DATE,
        alownull:false
    },
    tempo_entre_doses:{
        type:DataTypes.INTEGER,
        alownull:false
    },
    proxima_dose:{
        type:DataTypes.DATE,
        alownull:false

    }
})

Historico.associate = (models) =>{
    Historico.belongsTo(models.Medicacao, {foreignKey:'id_medicacao'})
}



module.exports = Historico