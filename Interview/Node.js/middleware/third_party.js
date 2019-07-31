const express = require('express')
const bodyParser = require('body-parser')
const app = express();


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())


app.post('/save', (req, res) => {
	res.json({
		'status': true,
		'payload': req.body
	})
})


app.listen(3000, (req, res) => {
	console.log('server running on port 3000')
})