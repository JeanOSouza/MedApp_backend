/*Tabela banco de dados */
const conn = require("../database/conn");
const { DataTypes } = require("sequelize");

const User = conn.define("User", {
  id_usuario: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  idade:{
    type:DataTypes.DATE,
  },
  comorbidades:{
    type:DataTypes.STRING
  }
});
// associacao usuario medicacao
User.associate = (models) => {
  User.hasMany(models.Medicacao, {foreignKey:'id_usuario'})
}

module.exports = User;
