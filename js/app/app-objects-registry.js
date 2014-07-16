define(['jquery', 'ListCollection', 'ListCollectionView', 'AddListView', 'TaskCollection', 'TaskCollectionView', 'AddTaskView', 'NoteView', 'CommentView', 'AddCommentView', 'ActionbarView', 'ResponsiveView', 'Router', 'bootstrapdata', 'backbone'], function($, ListCollection, ListCollectionView, AddListView, TaskCollection, TaskCollectionView, AddTaskView, NoteView, CommentView, AddCommentView, ActionbarView, ResponsiveView, Router, bootstrapdata, Backbone) {

	'use strict';

	var APP = {

		init: function() {
			var listCollection = new ListCollection(bootstrapdata);
			var listCollectionView = new ListCollectionView({
				collection: listCollection
			});
			var addListView = new AddListView({
				collection: listCollection
			});

			var router = new Router({
				listCollection: listCollection
			});

			var addTaskView = new AddTaskView();
			var taskCollectionView = new TaskCollectionView();
			var noteView = new NoteView();
			var commentView = new CommentView();
			var addCommentView = new AddCommentView();

			var actionbarView = new ActionbarView();
			var responsiveView = new ResponsiveView();

			this.setup();

			if (!localStorage.metaListBackbone) {
				this.createLocalDb(listCollection);
			}
			
			return {
				router: router,
				listCollection: listCollection
			};
		},

		createLocalDb: function(listCollection) {

			var listCollectionJson = _.each(listCollection.toJSON(), function(list) {
				list.tasks = list.tasks.toJSON();
			});
			localStorage.metaListBackbone = JSON.stringify(listCollection);

		},

		setup: function() {
			Backbone.history.loadUrl(Backbone.history.fragment);
		}

	};

	return APP;

});