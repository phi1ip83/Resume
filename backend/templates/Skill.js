const {Model, DataTypes} = require('sequelize')
const sequelize = require('../database')

class Skill extends Model{}
Skill.init({
    name:{
        type: DataTypes.STRING,
        allowNull:false
    },
    points:{
        type: DataTypes.JSON

    },
    tags:{
        type: DataTypes.JSON

    }


},{
    sequelize,
    modelName:'skill'
})
module.exports = Skill;