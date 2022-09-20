const sequelize = require('../config/conncetion');
const { Job } = require('../models');

const jobData = require('./jobData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true});

    const jobs = await Job.bulkCreate(jobData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
};

seedDatabase();