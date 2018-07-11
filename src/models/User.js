module.exports = function(sequelize, DataTypes) {
	return sequelize.define(
		'Users',
		{
			id: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			name: {
				type: DataTypes.STRING(255),
				allowNull: false
			},
			email: {
				type: DataTypes.STRING(255),
				allowNull: false
			}
		},
		{
			tableName: 'SYS_Users',
			timestamps: false
		}
	)
}
