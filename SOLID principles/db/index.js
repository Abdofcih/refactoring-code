const path = require("path");
const { Sequelize } = require("sequelize");
// cmd : psql -U postgres
// CREATE DATABASE "users-srp";

const env = process.env.NODE_ENV || "development";
const configPath = path.resolve("db", "config.json");
const sequelizeConfig = require(configPath)[env];

const sequelize = new Sequelize(
  sequelizeConfig.database,
  sequelizeConfig.username,
  sequelizeConfig.password,
  {
    host: sequelizeConfig.host,
    dialect: sequelizeConfig.dialect,
    logging: false,
  }
);

const User = require("./models/user.model")(sequelize, Sequelize);
const syncDB = require("./syncDB")(sequelize);
module.exports = {
  User,
};
