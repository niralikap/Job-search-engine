const sequelize = require('../config/conncetion');
const { User, Job } = require('../models');

const jobData = require('./jobData.json');
const userData = require('./userData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true});
    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    const jobs = await Job.bulkCreate(jobData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
};

seedDatabase();