define(['TaskCollection', 'backbone'], function(TaskCollection, Backbone){
	
	"use strict";

	var ListModel = Backbone.Model.extend({

		validate:function(attrs){

			if(!attrs.title){
				return "list must have titles";
			}

		},

		initialize: function(){
			this.tasks = new TaskCollection(this.get('tasks'));
		}
	});
	

	return ListModel;

});