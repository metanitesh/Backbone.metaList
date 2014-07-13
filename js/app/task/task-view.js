define(['backbone', 'underscore', 'jquery'], function(Backbone, _, $) {

	'use strict';

	var TaskView = Backbone.View.extend({

		tagName: 'li',

		className: 'task-item',

		template : $("#task-item").html(),

		events: {
			"click .check-task": "checkOff",
			"click .delete-task": "destroy",
			"click": "select"
		},

		initialize: function(){
			this.listenTo(this.model, "destroy", this.remove, this);
			this.render();

		},

		select: function(){
			
			this.$el.closest(".task-group").find("li").removeClass("task-item-selected");
			this.$el.addClass("task-item-selected");
			var listId  = this.model.collection.parent.get("id");
			APP.router.navigate(listId +"/"+this.model.get("id"), { trigger: true});

		},

		checkOff: function(){
			this.model.set("done", true);
		},

		destroy: function(){
			this.model.destroy();
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