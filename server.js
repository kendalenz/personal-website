const Sequelize = require('sequelize');
const {STRING} = Sequelize;
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/kendal_db');

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

const setup = async()=> {
    try {
        console.log('starting');
        await conn.sync({force: true});
        await Promise.all([
            User.create({firstName: 'Kendal', lastName: 'Enz'})
        ])
    }
    catch(err){
        console.log(err)
    }
}

setup();