'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.changeColumn('empleados', 'apellido', {
			type: Sequelize.STRING,
			allowNull: false,
		});
		await queryInterface.changeColumn('empleados', 'cargo', {
			type: Sequelize.STRING,
			allowNull: false,
		});
	},

	down: async (queryInterface, Sequelize) => {
		return Promise.all([
			queryInterface.changeColumn('empleados', 'apellido', {
				type: Sequelize.STRING,
				allowNull: true,
			}),
			queryInterface.changeColumn('empleados', 'cargo', {
				type: Sequelize.STRING,
				allowNull: true,
			}),
		]);
	},
};
