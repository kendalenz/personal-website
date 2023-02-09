const Sequelize = require('sequelize');
const config = {};

if (process.env.QUIET) {
  config.logging = false;
}
const conn = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost/kendal_db',
  config
);

module.exports = conn;