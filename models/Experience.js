const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class JobExperience extends Model {}

JobExperience.init(
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
        modelName: 'jobexperience',
    }
);

module.exports = JobExperience;