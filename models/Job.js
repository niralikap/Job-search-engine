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
            allowNull: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        experience: {
            type: DataTypes.ENUM('Internship', 'Entry', 'Associate', 'Mid-Senior', 'Director', 'Executive'),
            allowNull: true,
        },
        industry: {
            type: DataTypes.ENUM('Sales', 'IT', 'Management', 'Manufacturing', 'Engineering', 'Business Development', 'Production', 'Finance', 'Marketing', 'Software Development', 'Retail', 'Banking', 'Business Consulting', 'Investment Management', 'Professional Coaching'),//Set up dictionary function to match these to different departments
            allowNull: true,
        },
        postDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        minSalary: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        maxSalary: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        employer: {//Either individual or company name
            type: DataTypes.STRING,
            allowNull: true,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        state: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        isRemote: {//Data type is string instead of boolean to allow for hybrid positions
            type: DataTypes.ENUM('On-site', 'Remote', 'Hybrid'),
            allowNull: true,
        },
        hours: {//This is meant to be full-time vs part time
            type: DataTypes.ENUM('Full-time', 'Part-time', 'Contract', 'Temporary', 'Volunteer', 'Internship'),
            allowNull: true,
        },
        poster_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
            allowNull: true,
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