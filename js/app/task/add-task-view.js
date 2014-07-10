define(['backbone', 'underscore', 'jquery'], function(Backbone, _, $) {

	'use strict';

	var AddTaskView = Backbone.View.extend({

		el: '.add-task',

		events: {
			'keypress': "addTaskItem"
		},

		initialize: function(){
			$(document).on("cli", function(b, model){
				this.collection = model.tasks;
			}.bind(this))
		},

		addTaskItem: function(e){
			window.coll = this.collection;
			if(e.keyCode === 13){
				var val = this.$el.val();
				if(val){
					console.log(this.collection)
					this.collection.add({ title: val});
				}
				this.$el.val("");
			}
		}
	});

	return AddTaskView;

});