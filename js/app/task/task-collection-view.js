define(['backbone', 'underscore', 'jquery', 'TaskModel', 'TaskView'], function(Backbone, _, $, TaskModel, TaskView) {

	'use strict';

	var TaskCollectionView = Backbone.View.extend({

		el: '.task-group',

		
		initialize: function() {
			
			this.render();

			this.collection.on("change", this.render, this);
			this.collection.on("add", this.render, this);

		},

		

		render: function() {
			this.$el.find('.task-complete').empty();
			this.$el.find('.task-remaining').empty();
			this.collection.each(function(task) {
				this.addOne(task);
			}, this);
		},

		addOne: function(task) {

			var taskView = new TaskView({
					model: task
			});

			if(task.get("done")){
				this.$el.find('.task-complete').append(taskView.el);	
			} else {
				this.$el.find('.task-remaining').append(taskView.el);
			}
		}
	});

	return TaskCollectionView;

});