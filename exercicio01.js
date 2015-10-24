var mongoose= require('mongoose');
mongoose.connect('mongodb://localhost/pos_unoesc');

var db = mongoose.connection;

db.on('error', function(err){
	console.log('Erro de conexao ', err);	
});
db.on('opne', function(err){
	console.log('Conexão Aberta. ');	
});
db.on('connected', function(err){
	console.log('Conectado');	
});
db.on('disconnected', function(err){
	console.log('Disconectado');	
});