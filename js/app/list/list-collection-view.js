define(['backbone', 'underscore', 'jquery', 'ListModel', 'ListView', 'TaskCollection'], function(Backbone, _, $, ListModel, ListView, TaskCollection) {

	'use strict';

	var ListCollectionView = Backbone.View.extend({

		el: '#list-view .list-container',

		initialize: function() {
			this.render();
			this.collection.on("add", this.addOne, this);
		},

		render: function() {
			this.collection.each(function(list) {
				this.addOne(list);
			}, this);
		},

		addOne: function(list) {
			var listView = new ListView({
					model: list
			});
			this.$el.append(listView.el);
		}
	});

	return ListCollectionView;

});