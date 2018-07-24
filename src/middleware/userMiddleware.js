export const checkDataUser = (req, res, next) => {
	const { userId } = req

	if (typeof userId === 'number') next()

	res.json({ error: 'The user id is not a number.' })
}
