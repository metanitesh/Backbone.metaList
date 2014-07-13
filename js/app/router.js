define(['backbone'], function( Backbone) {

	var Router = Backbone.Router.extend({

		routes: {
			'' : 'index',
			':id' : 'setupList',
			':id/:id': 'setupTask'
		},

		index: function(){
			console.log("index");			
		},

		setupTask: function(listId, taskId){
			console.log("task");

			var listModel =  APP.listCollection.get(listId);
			var taskModel = listModel.get('tasks').get(taskId);
			vent.trigger("listSelected", listModel);
			vent.trigger("taskSelected", taskModel);
		},

		setupList: function(id){
			console.log("list");
			var listModel = APP.listCollection.get(id);
			vent.trigger("listSelected", listModel);
		},		

	});

	Backbone.history.start();
	return Router;
});