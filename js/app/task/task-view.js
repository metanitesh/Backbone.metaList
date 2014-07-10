define(['backbone', 'underscore', 'jquery'], function(Backbone, _, $) {

	'use strict';

	var TaskView = Backbone.View.extend({

		tagName: 'li',

		className: 'task-item',

		template : $("#task-item").html(),

		events: {
			"click .check-task": "checkTaskOff",
			"click .delete-task": "destroy",
			"click": "activate"
		},

		initialize: function(){
			this.model.on("destroy", this.remove, this);
			this.model.on("chnage", this.render, this);
			this.render();

		},

		activate: function(){
			
			this.$el.closest(".task-group").find("li").removeClass("task-item-selected");
			this.$el.addClass("task-item-selected");
			$(document).trigger("activeTask", this.model);
		},

		checkTaskOff: function(){
			this.model.set("done", true);
		},

		destroy: function(){
			this.model.destroy();
		},

		remove: function(){
			this.$el.remove();
		},

		render: function(){
			var compiled = _.template(this.template);
			var html = compiled(this.model.toJSON());
			this.$el.append(html);
			return this;
		}
	});

	return TaskView;

});