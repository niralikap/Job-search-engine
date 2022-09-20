const Job = require('./Job')
const User = require('./User')
User.hasMany(Job, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Job.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { Job, User };