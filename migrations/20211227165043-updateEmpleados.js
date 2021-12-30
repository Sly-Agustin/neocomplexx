'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		queryInterface.addColumn('empleados', 'dni', {
			type: Sequelize.STRING,
			allowNull: false,
		});
	},

	down: async (queryInterface, Sequelize) => {
		return Promise.all([queryInterface.removeColumn('empleados', 'dni')]);
	},
};
