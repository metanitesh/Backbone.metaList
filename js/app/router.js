define(['backbone', 'util', 'app'], function(Backbone, util, APP) {

	var Router = Backbone.Router.extend({

		routes: {
			'': 'index',
			':id': 'setupList',
			':id/:id': 'setupTask'
		},

		initialize: function(config) {
			this.listCollection = config.listCollection;
		},

		index: function() {
			var listModel = this.listCollection.at(0);

			if (!listModel) {
				util.vent.trigger('noList', listModel);
				return;
			}

			this.navigate(listModel.get('id'), {
				trigger: true
			});
		},

		setupTask: function(listId, taskId) {

			var listModel = this.listCollection.get(listId);
			if (!listModel) {
				return;
			}
			util.vent.trigger('listSelected', listModel);


			var taskModel = listModel.get('tasks').get(taskId);
			if (!taskModel) {
				return;
			}
			util.vent.trigger('taskSelected', taskModel);

			listModel.view.activeListState();
			taskModel.view.activeTaskState();

		},

		setupList: function(id) {

			var listModel = this.listCollection.get(id);
			if (!listModel) {
				return;
			}
			util.vent.trigger('listSelected', listModel);
			listModel.view.activeListState();

		},

	});

	Backbone.history.start();
	return Router;
});