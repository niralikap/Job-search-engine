const Job = require('./Job')
const User = require('./User')


User.hasMany(Job, {
    foreignKey: 'poster_id'
});

Job.belongsTo(User, {
    foreignKey: 'poster_id'
});

module.exports = { Job, User};