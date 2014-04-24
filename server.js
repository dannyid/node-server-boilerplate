
var appPort =  process.env.PORT || 3000;

var express = require('express'), 
    app = express(),
    http = require('http'),
    server = http.createServer(app)

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('view options', { layout: false });

app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
  res.render('home.jade');
});

app.get("/:url", function(req, res){
  res.render('home.jade');
});

server.listen(appPort);
