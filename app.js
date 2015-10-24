var http = require('http');



var Controller = require('./controller');
	
http.createServer(function (req, res) {
	console.log('URL: ', req.url);		
	res.writeHead(200, {'Content-Type': 'text/plain'});
	
var url = req.url;
	switch(url){
	case '/api/beers/create':
		Controller.create(req, res);  
	break;
	case '/api/beers/retrieve':
		Controller.retrieve(req, res);  
	break;
	case '/api/beers/update':
		Controller.update(req, res);  
	break;
	case '/api/beers/delete':
		Controller.delete(req, res);  
	break;
	default:
		res.end('Rota não encontrada!');
	break;

	};

}).listen(3000, "127.0.0.1");

console.log('Server running at http://127.0.0.1:3000/');

