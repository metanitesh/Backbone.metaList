        CommentView: 'js/app/comment/comment-view',
define(['jquery', 'underscore', 'Router', 'ListCollection', 'ListCollectionView', 'AddListView', 'TaskCollection', 'TaskCollectionView', 'AddTaskView', 'NoteView', 'CommentView', 'AddCommentView'], function($, _, Router, ListCollection, ListCollectionView, AddListView, TaskCollection, TaskCollectionView, AddTaskView, NoteView, CommentView, AddCommentView) {

	'use strict';

	$(function() {

		$(".loader").hide();

		window.listCollection = new ListCollection([{
			title: "test",
			tasks: [{
				title: "some task",
				done: false,
				content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, blanditiis?",
				comments: ["yaa", "it works"]
			}, {
				title: "some more task",
				done: true,
				content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, blanditiis?",
				comments: ["noo", "it didn't works"]
			}]
		}, {
			title: "books",
			tasks: [{
				"title": "The Art Spirit",
				"comments": ["a work of art which inspires comes from no quibbling or uncertain man", "the book is pure delight for detail oriented peoples"],
				"content": "In certain books- some way in the first few\nparagraphs you know that you have met a brother.",
				"done": false
			}, {
				"title": "The Alchemist",
				"comments": ["how to make a great book even better - make a graphic novel"],
				"content": "It's simple things in life that are most extraordinary. only wise man are able to understand them.\n",
				"done": true
			}, {
				"title": "The Noticer",
				"comments": ["get some perspective from an old man"],
				"content": "If one makes a mistake then an apology is usually sufficient to get things back on keel. However most peoples doest not seems to understand why  their apology have no effect. it is simply because they did not make a mistake. they made a choice.\n\n",
				"done": true
			}, {
				"title": "Essentialism",
				"comments": [],
				"content": "We often think of choice as a thing. But choice is not a thing. our option may be  things. but a choice- a choice is an action.",
				"done": false
			}]
		}, {
			title: "to-do",
			tasks: [{
				"title": "clean house",
				"comments": ["after lunch", "maybe tomorrow", "doesn't look that bad"],
				"content": "it's been ages man !",
				"done": false
			}, {
				"title": "get a haircut",
				"comments": ["will do this weekend"],
				"content": "this could be a good reason to become a monk",
				"done": true
			}, {
				"title": "buy grocery",
				"comments": [],
				"content": "1. eggs\n2. apples\n3. bread \n4. wine",
				"done": false
			}]
		},{
			title: "do",
			tasks: []
		}]);
		
		window.vent = _.extend(Backbone.Events);
		

		new Router();


		var listCollectionView = new ListCollectionView({
			collection: listCollection
		});

		var addListView = new AddListView({
			collection: listCollection
		});

		var addTaskView = new AddTaskView()
		var taskCollectionView = new TaskCollectionView();


		var noteView = new NoteView();
		var commentView = new CommentView();
		var addCommentView = new AddCommentView();
		
		// window.taskCollection = new TaskCollection([{
		// 	title: "some task",
		// 	done: false,
		// 	content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, blanditiis?",
		// 	comments: ["yaa", "it works"]
		// }, {
		// 	title: "some more task",
		// 	done: true,
		// 	content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, blanditiis?",
		// 	comments: ["noo", "it didn't works"]
		// }]);

		// var taskCollectionView = new TaskCollectionView({
		// 	collection: taskCollection
		// });

		


	});

});