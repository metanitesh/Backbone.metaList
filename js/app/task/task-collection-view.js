define(['backbone', 'underscore', 'jquery', 'TaskModel', 'TaskView'], function(Backbone, _, $, TaskModel, TaskView) {

	'use strict';

	var TaskCollectionView = Backbone.View.extend({

		el: '.task-group',

		initialize: function() {
			vent.on("listSelected", this.setupTasks, this);
		},

		setupTasks: function(model) {
			this.parent = model;
			this.collection = model.get("tasks");
			this.render();

			this.listenTo(this.collection, "add", this.render);
			this.listenTo(this.collection, "change", this.render);
		},


		emptyViewState: function() {
			this.$el.find('.task-complete').empty();
			this.$el.find('.task-remaining').empty();
		},

		taskCompleteState: function() {
			this.$el.find('.task-complete .task-item').addClass('task-done');
			this.$el.find('.task-complete .check-task').addClass('icon-task-checked');
		},

		render: function() {

			this.emptyViewState();
			this.collection.each(function(task) {
				this.addOne(task);
			}, this);
		},

		addOne: function(task) {

			var taskView = new TaskView({
				model: task
			});

			if (task.get("done")) {
				this.$el.find('.task-complete').append(taskView.el);
				this.taskCompleteState();

			} else {
				this.$el.find('.task-remaining').append(taskView.el);
			}
		}
	});

	return TaskCollectionView;

});