define(['backbone', 'underscore', 'jquery', 'util'], function(Backbone, _, $, util) {

	'use strict';

	var AddTaskView = Backbone.View.extend({

		el: '.add-task',

		events: {
			'keypress': "addTaskItem"
		},

		initialize: function(){
			util.vent.on('listSelected', this.setup, this);
		},

		setup: function(model){
			this.parent = model;
			this.collection = model.get("tasks");
		},

		addTaskItem: function(e){
			
			if(e.keyCode === 13){
				var val = this.$el.val();
				
				if(val){
					this.collection.add({ title: val }, {validate: true});
					this.$el.val("");
				}
				
			}
		}
	});

	return AddTaskView;

});