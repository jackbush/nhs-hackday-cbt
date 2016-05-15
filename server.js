var express = require('express');
var compression = require('compression');
var fs = require('fs');

var app = express();
app.use(compression());

app.set('view engine', 'pug');

// Server
app.use(express.static(__dirname, {
	maxAge: ~~(Math.random() * 86400000) + 800000
}));

// App prototype
app.get('/', function (req, res) {
	res.render('index');
});

// About PDF
app.get('/about', function (req, res) {
	var file = fs.createReadStream('./views/about.pdf');
	var stat = fs.statSync('./views/about.pdf');
	res.setHeader('Content-Length', stat.size);
	res.setHeader('Content-Type', 'application/pdf');
	file.pipe(res);
});

app.listen(process.env.PORT || 3000);
