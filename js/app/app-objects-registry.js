define(['Router', 'ListCollection', 'ListCollectionView', 'AddListView', 'TaskCollection', 'TaskCollectionView', 'AddTaskView', 'NoteView', 'CommentView', 'AddCommentView', 'bootstrapdata', 'backbone'], function( Router, ListCollection, ListCollectionView, AddListView, TaskCollection, TaskCollectionView, AddTaskView, NoteView, CommentView, AddCommentView, bootstrapdata, Backbone) {

	'use strict';

	var APP = {};
	APP.vent = _.extend(Backbone.Events);

	APP.listCollection = new ListCollection(bootstrapdata);
	APP.listCollectionView = new ListCollectionView({
		collection: APP.listCollection
	});
	APP.addListView = new AddListView({
		collection: APP.listCollection
	});

	APP.addTaskView = new AddTaskView();
	APP.taskCollectionView = new TaskCollectionView();
	APP.noteView = new NoteView();
	APP.commentView = new CommentView();
	APP.addCommentView = new AddCommentView();

	APP.Router = new Router();

	return APP;

});