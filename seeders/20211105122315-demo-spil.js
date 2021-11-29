'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Spils', [{
    name: 'Laila',
    gulerod: 77,
    cash: 3000,
    createdAt: Date.now(), updatedAt: Date.now() 
    }], {});
  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.bulkDelete('Spils', null, {});
     
  }
};
