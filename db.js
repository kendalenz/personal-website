// const Sequelize = require('sequelize');
// const {STRING} = Sequelize;
// const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/kendal_db');

// const User = conn.define('user', {
//     firstName: {
//         type: STRING,
//         allowNull: false,
//         validate: {
//             notEmpty: true
//         }
//     },
//     lastName: {
//         type: STRING,
//         allowNull: false,
//         validate: {
//             notEmpty: true
//         }
//     }
// });

// module.exports = {
//     conn,
//     User
// }