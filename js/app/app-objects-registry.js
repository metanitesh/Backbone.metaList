define(['jquery',  'ListCollection', 'ListCollectionView', 'AddListView', 'TaskCollection', 'TaskCollectionView', 'AddTaskView', 'NoteView', 'CommentView', 'AddCommentView', 'ActionbarView', 'Router', 'bootstrapdata', 'backbone'], function($, ListCollection, ListCollectionView, AddListView, TaskCollection, TaskCollectionView, AddTaskView, NoteView, CommentView, AddCommentView, ActionbarView, Router, bootstrapdata, Backbone) {

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

			
			this.setup();

			return {
				router: router,
				listCollection: listCollection
			};
		},



		setup: function() {
			$(".loader").hide();
			Backbone.history.loadUrl(Backbone.history.fragment);
		}

	};

	return APP;

});