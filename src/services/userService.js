import db from '../../config/db'
import UserModel from '../models/User'

export const findUser = params => UserModel.findOne({ where: params, raw: true })


export const findAllUserWithQuery = () => db.query('SELECT * from user WHERE 1' , {
	replacements: {
	},type: db.QueryTypes.SELECT
})

