define(['TaskCollection', 'backbone', 'jquery'], function(TaskCollection, Backbone, $){
	
	"use strict";

	var ListModel = Backbone.Model.extend({

		validate:function(attrs){
			console.log(attrs)
			if(!attrs.title.replace(/^\s+|\s+$/g, '')){
				return "list must have title";
			}
		},

		initialize: function(){
			// this.tasks = new TaskCollection(this.get('tasks'));
		}
	});
	

	return ListModel;

});