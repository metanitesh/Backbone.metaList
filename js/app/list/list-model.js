define(['TaskCollection', 'backbone', 'jquery'], function(TaskCollection, Backbone, $){
	
	"use strict";

	var ListModel = Backbone.Model.extend({

		validate:function(attrs){
			if(!attrs.title.replace(/^\s+|\s+$/g, '')){
				return "list must have title";
			}
		},

		initialize: function(){
			this.tasks = new TaskCollection(this.get('tasks'));
			this.set('tasks', this.tasks) 
		}
	});
	

	return ListModel;

});