const sequelize = require('../config/conncetion');
const { User, Job, Remote, Experience, Hours, Industry } = require('../models');

const jobData = require('./jobData.json');
const userData = require('./userData.json');
const remoteData = require('./remoteData.json');
const experienceData = require('./experienceData.json');
const hoursData = require('./hoursData.json');
const industryData = require('./industryData.json');
const seedDatabase = async () => {
    await sequelize.sync({ force: true});
    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    await Job.bulkCreate(jobData, {
        individualHooks: true,
        returning: true,
    });
    await Remote.bulkCreate(remoteData, {
        individualHooks: true,
        returning: true,
    });
    await Experience.bulkCreate(experienceData, {
        individualHooks: true,
        returning: true,
    });
    await Hours.bulkCreate(hoursData, {
        individualHooks: true,
        returning: true,
    });
    await Industry.bulkCreate(industryData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
};

seedDatabase();