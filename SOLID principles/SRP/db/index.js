const { Sequelize } = require("sequelize");

// cmd : psql -U postgres
// CREATE DATABASE "users-srp";


const sequelize = new Sequelize("users-srp", "postgres", "1234", {
  host: "localhost",
  dialect: "postgres",
  logging:false
});





const User = require("./models/user.model")(sequelize, Sequelize);
const syncDB = require("./syncDB")(sequelize);
module.exports = {
  User,
};
