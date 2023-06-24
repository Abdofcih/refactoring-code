"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = [];
    for (let i = 0; i < 50; i++) {
      let displayI = i + 1;
      let user = {
        name: `${displayI} - name`,
        username: `${displayI} - username`,
        password: `${displayI}`.repeat(8),
        email: `${displayI} - email@gmail.com`,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      users.push(user);
    }
    await queryInterface.bulkInsert("Users", users, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
