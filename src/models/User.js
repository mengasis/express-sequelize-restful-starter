import db from '../../config/db'

const userModel = db.define('Users', 		{
	id: {
		type: db.Sequelize.INTEGER(11),
		allowNull: false,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: db.Sequelize.STRING(255),
		allowNull: false
	},
	email: {
		type: db.Sequelize.STRING(255),
		allowNull: false
	}
}, 		{
	tableName: 'SYS_Users',
	timestamps: false
})

export default userModel