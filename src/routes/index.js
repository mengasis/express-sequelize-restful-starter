import { UserRoute } from './UserRoute'
import * as userMiddleware from '../middleware/userMiddleware'

export default [
	{
		path: '/user',
		middleware: [...userMiddleware],
		handler: UserRoute
	}
]
