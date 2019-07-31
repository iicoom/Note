var express = require('express')
var app = express()

// if logged in, continue, else redirect to login page
function isAuth(req, res, next) {
	if (res.user && res.uesr.isLoggedIn) {
		return next()
	}

	res.redirect('/login')
}


app.get('/user/:id', isAuth, function(req, res, next) {
	res.send('Hello:' + res.user.name)
})