import { UserRoute } from './routes/UserRoute'
import * as userMiddleware from '../middleware/userMiddleware'

export const Router = [
	{
		path: '/user',
		middleware: [...userMiddleware],
		handler: UserRoute
	}
]
