import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import http from 'http'
import compression from 'compression'
import errorHandler from 'errorhandler'
import 'babel-polyfill'

import config from './config/constant'
import router from './src/routes'

const app = express()

const environment = process.env.NODE_ENV || config.ENVIRONMENT || 'development'
const port = process.env.PORT || config.PORT || 3000

if (environment == 'production') app.use(compression())
else if (environment == 'development') app.use(errorHandler())

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*')
	res.header(
		'Access-Control-Allow-Headers',
		'X-Requested-With, Content-Type, Authorization'
	)
	res.header(
		'Access-Control-Allow-Methods',
		'GET,PUT,PATCH,POST,DELETE,OPTIONS'
	)
	next()
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

router.map(route => app.use(route.path, route.middleware, route.handler))

app.use((req, res, next) => {
	res.status(404)
	res.json({ error: 'Not found' })
	next()
})

app.use((err, req, res, next) => {
	if (err.name === 'UnauthorizedError') {
		res.status(401).json({ error: 'Please send a valid Token...' })
	}
	next()
})

app.use((err, req, res, next) => {
	res.status(err.status || 500)
	res.json({ error: err.message })
	next()
})

const server = http.createServer(app)
server.listen(port)

server.on('error', error => {
	if (error.syscall !== 'listen') throw error

	const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port

	switch (error.code) {
	case 'EACCES':
		console.error(bind, ' requires elevated privileges')
		process.exit(1)
		break
	case 'EADDRINUSE':
		console.error(bind, ' is already in use')
		process.exit(1)
		break
	default:
		throw error
	}
})

server.on('listening', () => {
	const addr = server.address()
	const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port

	console.log(
		`Server is running in process ${process.pid} listening on ${bind}`
	)
})

export default app
