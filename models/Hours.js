const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Hours extends Model {}
Hours.init(
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
        modelName: 'hours',
    }
);
module.exports = Hours;