var express = require('express');
var mongojs = require('mongojs');
var app = express();
var db = mongojs('my_server', ['book']);

app.use(express.static(__dirname + '/public'));
app.get('/api/book',function(req,res){
	db.book.find({},function(err,books){
	res.send(books);
	})	
 })

var server = app.listen(3000, function () {

  	console.log("server is running")

})