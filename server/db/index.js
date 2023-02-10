const conn = require('./conn');
const User = require('./User');

const syncAndSeed = async () => {
    await conn.sync({force: true});
    await Promise.all([
        User.create({firstName: 'Kendal', lastName: 'Enz'})
    ]);
};

module.exports = {
    syncAndSeed,
    User
};