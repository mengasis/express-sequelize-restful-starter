import { UserRoute } from './routes/UserRoute'

export const Router = [
	{
		path: '/user',
		middleware: [],
		handler: UserRoute
	}
]
