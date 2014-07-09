define(['backbone'], function( Backbone) {

	var Router = Backbone.Router.extend({

		routes: {
			'' : 'index',
			':id' : 'setupList',
			':id/:id': 'setupTask'
		},

		index: function(){
			
		},

		setupList: function(id){
			console.log(id);
		},

		setupTask: function(id, id2){
			console.log(id, id2);
		}

	});

	Backbone.history.start();
	return Router;
});