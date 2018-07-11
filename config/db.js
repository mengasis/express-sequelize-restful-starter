import Sequelize from 'sequelize'
import config from './constant'

const server = process.env.SERVER || config.DATABASE.SERVER
const database = process.env.DB || config.DATABASE.DB
const username = process.env.USERNAME || config.DATABASE.USER
const password = process.env.PASSWORD || config.DATABASE.PASSWORD
const dialect = process.env.DIALECT || config.DATABASE.DIALECT

export default new Sequelize(database, username, password, {
	host: server,
	dialect: dialect,
	logging: false
})
