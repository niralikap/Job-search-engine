const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Job extends Model {}

Job.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
        },
        experience: {
            type: DataTypes.STRING,
        },
        industry: {
            type: DataTypes.STRING,
        },
        postDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        salary: {
            type: DataTypes.INTEGER,
        },
        employer: {
            type: DataTypes.STRING,
        },
        location: {
            type: DataTypes.STRING,
        },
        isRemote: {//Data type is string instead of boolean to allow for hybrid positions
            type: DataTypes.STRING,
        },
        hours: {//This is meant to be full-time vs part time
            type: DataTypes.STRING,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'job',
    }
);

module.exports = Job;