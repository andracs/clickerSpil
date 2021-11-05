'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('Spils', [{
        name: 'John Doe',
        points: 0,
        createdAt: new Date(),
        updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.bulkDelete('Spils', null, {});
     
  }
};
