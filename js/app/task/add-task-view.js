define(['backbone', 'underscore', 'jquery', 'util'], function(Backbone, _, $, util) {

	'use strict';

	var AddTaskView = Backbone.View.extend({

		el: '.add-task',

		events: {
			'keypress': "addTaskItem"
		},

		initialize: function(){
			util.vent.on('listSelected', this.setup, this);
			util.vent.on("noList", this.disableView, this);

		},

		disableView: function(){
			this.$el.attr("disabled", "disabled");
			this.$el.css("opacity", 0.3);
		},

		enableView: function(){
			this.$el.removeAttr("disabled", "disabled");
			this.$el.css("opacity", 1);

		},

		setup: function(model){
			this.enableView();
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