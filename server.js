var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function (req, res) {
	res.send('Hello world!');
});

app.get('/auth/google', function(req, res) {
	res.render('log-in');
});

app.get('/success', function(req, res) {
	res.render('logged-in');
});

app.listen(3000);
app.use(function (req, res, next) {
	res.status(404).send('Sorry, page not found');
});