'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class empleados extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	empleados.init(
		{
			nombre: DataTypes.STRING,
			apellido: DataTypes.STRING,
			cargo: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'empleados',
		}
	);
	return empleados;
};
