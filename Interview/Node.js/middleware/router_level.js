const express = require('express')

const app = express()

const router = express.Router()

// Load router-level middleware by using the router.use() and router.METHOD() functions.

router.use((req, res, next) => {
	console.log("Time:", new Date())
	next()
})


router.get('/user/:id', (req, res, next) => {
	console.log('Request Url:', req.originalUrl)
	next()
}, (req, res, next) => {
	console.log('Request Type:', req.method)
	next()
}, (req, res) => {
	res.json({
		status: true,
		id: req.params.id
	})
})


app.use('/', router)

app.listen(3000, (req, res) => {
	console.log('server running on 3000')
})