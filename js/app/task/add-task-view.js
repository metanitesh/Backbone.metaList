define(['backbone', 'underscore', 'jquery'], function(Backbone, _, $) {

	'use strict';

	var addTaskView = Backbone.View.extend({

		el: '.add-task',

		events: {
			'keypress': "addTaskItem"
		},

		addTaskItem: function(e){
			if(e.keyCode === 13){
				var val = this.$el.val();
				if(val){
					this.collection.add({ title: val});
				}
				this.$el.val("");
			}
		}
	});

	return addTaskView;

});