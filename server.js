
var appPort =  process.env.PORT || 3000;

var express = require('express'), 
    bodyParser =  require( 'body-parser' ),
    app = express(),
    http = require('http'),
    server = http.createServer(app)


app.use( bodyParser.urlencoded( {extended: true} ) );
app.use( bodyParser.json() );

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('view options', { layout: false });

app.use(express.static(__dirname + '/public'));

app.all("/", function(req, res){
  res.render('home.jade');
  console.log(req.body);
});

app.get("/:url", function(req, res){
  res.render('home.jade');
});

server.listen(appPort);
