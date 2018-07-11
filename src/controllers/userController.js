import { findUser } from '../services/userService'

export const getUser = async (req, res) => {
	const { userId } = req.body

	const user = await findUser({ userId })

	if (!user)
		res.status(404)
			.send({ message: 'User not found.' })
			.end()
	res.status(200)
		.send(user)
		.end(true)
}
