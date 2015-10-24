var Model = require('./model');
var Controller = {
	create: function(req, res){
		var dados={
	name: 'Skol',
	description: 'Mijo de rato',
	alcohol: 4.5,
	price: 3.0,
	category: 'pilsen'
	};

	var model = new Model(dados);
	var msg = '';
	model.save(function(err, data){
		if(err){
			console.log('Erro: ', err);	
			msg = 'Erro: '+err;		
		}else{
			console.log('Cerveja inserida ', data);
			msg= 'Cerveja inserida '+ data;
		}
		  res.end(msg);
	});
	},
	
	retrieve: function(req, res){

	var query = {};

	Model.find(query, function(err, data){
		if(err){
			console.log('Erro : ', err);
			msg = 'Erro: '+err;	
		}else{
			console.log('Listagem ', data);
			msg= 'Listagem '+ data;
		}
		res.render('list', { title: 'Listagem de cervejas' });
	});

	},
		list: function(req, res){

	var query = {};

	Model.find(query, function(err, data){
		if(err){
			console.log('Erro : ', err);
			msg = 'Erro: '+err;	
		}else{
			console.log('Listagem ', data);
			msg= 'Listagem '+ data;
		}
		res.end(msg);
	});

	},
	update:function(req, res){

		var query = { name: /skol/i};

		var mod ={
			name: 'Brahma',
			alcohol:4,
			price: 6,
			category: 'pilsen'
		};

		var optional= {
			upsert: false,
			multi: true
		};

		Model.update(query, mod, optional, function(err, data){
			if(err){
				console.log('Erro: ', err);
				msg = 'Erro: '+err;	
			}else{
				console.log('Cerveja atualizada com sucesso: ', data);
				msg= 'Cerveja atualidaza com sucesso '+ data;
			}
			res.end(msg);
		});
	},
	delete: function (req, res){

		var query = { name: /brahma/i};

		//E multi CUIDADO

		Model.remove(query, function(err, data){
			if(err){
				console.log('Erro: ', err);
				msg = 'Erro: '+err;	
			}else{
				console.log('Cerveja deletada com sucesso, quantidade: ', data.result);
				msg= 'Cerveja deletada com sucesso '+ data.result;
			}
			res.end(msg);
		});

	}
}

module.exports = Controller;