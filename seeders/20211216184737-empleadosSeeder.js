'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('empleados', [{
      nombre: 'Ramiro',
      apellido: 'Luna',
      cargo: 'Diseñador',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Empleados', null, {});
  }
};
