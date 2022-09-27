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
            type: DataTypes.INTEGER,
            references: {
                model: 'experience',
                key: 'id'
            },
        },
        industry: {
            type: DataTypes.INTEGER,//Set up dictionary function to match these to different departments
            references: {
                model: 'industry',
                key: 'id'
            },
        },
        postDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        minSalary: {
            type: DataTypes.INTEGER,
        },
        maxSalary: {
            type: DataTypes.INTEGER
        },
        employer: {//Either individual or company name
            type: DataTypes.STRING,
        },
        city: {
            type: DataTypes.STRING,
        },
        state: {
            type: DataTypes.STRING,
        },
        isRemote: {//Data type is string instead of boolean to allow for hybrid positions
            type: DataTypes.INTEGER,
            references: {
                model: 'remote',
                key: 'id',
            },
        },
        hours: {//This is meant to be full-time vs part time
            type: DataTypes.INTEGER,
            references: {
                model: 'hours',
                key: 'id',
            },
        },
        poster_id: {
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


/*
Arrays to be mapped to appropriate properties
industry = [
    IT,
    Finance,
    Front-end,
    Back-end,
]


isRemote = [
    remote,
    in-person,
    hybrid,
]

hours = [
    full-time,
    part-time,
    contract,
    temporary,
    volunteer,
    intern,
]

experience = [
    intern,
    entry-level,
    associate,
    mid-senior,
    director,
    executive,
]*/