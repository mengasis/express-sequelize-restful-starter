import { DataTypes } from 'sequelize'

import db from '../../config/db'
import ModelUser from '../models/User'

const User = ModelUser(db, DataTypes)

export const findUser = params => {
	return User.findOne({ where: params, raw: true })
}
