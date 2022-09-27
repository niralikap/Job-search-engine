const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class IndustryType extends Model {}
IndustryType.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'industrytype',
    }
);
module.exports = IndustryType;