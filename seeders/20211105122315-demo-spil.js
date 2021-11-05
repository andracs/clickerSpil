'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Spils', [{
    name: 'Andy Seed',
    gulerod: 77,
    cash: 3000,
    createdAt: Date.now(), updatedAt: Date.now() 
    }], {});
  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.bulkDelete('Spils', null, {});
     
  }
};
