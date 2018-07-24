import db from '../../config/db'
import UserModel from '../models/User'

export const findUser = params => UserModel.findOne({ where: params, raw: true })

