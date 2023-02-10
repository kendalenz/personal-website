const conn = require('./conn');
const {STRING} = conn.Sequelize;

const User = conn.define('user', {
    firstName: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    lastName: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
});

module.exports = User;