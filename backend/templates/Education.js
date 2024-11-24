const {Model, DataTypes} = require('sequelize')
const sequelize = require('../database')

class Education extends Model{}
Education.init({
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

    }

},{
    sequelize,
    modelName:'education'
})
module.exports = Education;