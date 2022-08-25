const User = require('./User');
const Blogg = require('./Blogg');

User.hasMany(Blogg, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// relations between user and comments

// relations between blogg and comments


module.exports = { User};