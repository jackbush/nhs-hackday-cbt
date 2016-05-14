var express = require('express');
var compression = require('compression');

var app = express();
app.use(compression());

app.set('view engine', 'pug');

// Server
app.use(express.static(__dirname, {
	maxAge: ~~(Math.random() * 86400000) + 800000
}));

// Routes
app.get('/', function (req, res) {
	res.render('index');
});

app.listen(process.env.PORT || 3000);
