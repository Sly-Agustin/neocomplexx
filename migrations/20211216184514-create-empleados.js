'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('empleados', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			nombre: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			apellido: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			cargo: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('empleados');
	},
};
