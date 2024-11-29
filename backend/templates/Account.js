const {Model, DataTypes} = require('sequelize')
const sequelize = require('../database')

class Account extends Model{}
Account.init({
    name:{
        type: DataTypes.STRING,
        allowNull:false,
        primaryKey:true
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false
    }

},{
    sequelize,
    modelName:'account'
})
module.exports = Account;