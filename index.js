var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public'));
app.get('/api/book',function(req,res){
	var books = [
		{title: 'ManU', price: 300},
		{title: 'Liver', price: 500},
		{title: 'Chelsea', price: 800}
	];
	res.send(books);
})

var server = app.listen(3000, function () {

  	console.log("server is running")

})