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

var Cat = mongoose.model('Cat', {name: String});

var kitty = new Cat({name: 'Oswaldinho'});

kitty.save(function(err, data){
	if(err){
		console.log('Erro: ', err);
	}
	console.log('meow', data);
})