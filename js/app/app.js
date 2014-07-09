define(['jquery', 'ListCollection', 'ListCollectionView', 'AddListView'], function($, ListCollection, ListCollectionView, AddListView) {

	'use strict';

	$(function() {
		
		window.listCollection = new ListCollection([{
			title: "todo"
		},{
			title: "movie"
		},{
			title: "books"
		}]);

		var listCollectionView = new ListCollectionView({
			collection: listCollection
		});

		var addListView = new AddListView({
			collection: listCollection
		});

	});

});