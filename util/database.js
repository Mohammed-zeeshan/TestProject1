const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "redmi4", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
