const {Model, DataTypes} = require('sequelize')
const sequelize = require('./database')

class Experience extends Model{}
Experience.init({
    name:{
        type: DataTypes.STRING,
        allowNull:false
    },
    date:{
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
    modelName:'experience'
})
module.exports = Experience;