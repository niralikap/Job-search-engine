const Job = require('./Job')
const User = require('./User')
const Remote = require('./Remote')
const Experience = require('./Experience')
const Hours = require('./Hours')
const Industry = require('./Industry')

User.hasMany(Job, {
    foreignKey: 'poster_id'
});

Job.belongsTo(User, {
    foreignKey: 'poster_id'
});
Job.hasOne(Remote, {
    foreignKey: 'isRemote'
});
Job.hasOne(Hours, {
    foreignKey: 'hours'
});
Job.hasOne(Experience, {
    foreignKey: 'experience'
});
Job.hasOne(Industry, {
    foreignKey: 'industry'
});
module.exports = { Job, User, Remote, Experience, Hours, Industry };