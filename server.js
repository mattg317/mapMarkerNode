var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();

app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
	}));

app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.get('/', function(req, res){
	

		res.render('index');
});

// require('./app/routing/html-routes.js')(app);
require('./routing/api-routes.js')(app);

var PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
	console.log('listening on PORT:', PORT);
});
