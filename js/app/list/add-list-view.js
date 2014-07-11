define(['backbone', 'underscore', 'jquery'], function(Backbone, _, $) {

	'use strict';

	var AddListView = Backbone.View.extend({

		el: '.add-new-list',

		events: {
			'keypress': "addListItem"
		},

		addListItem: function(e){
			if(e.keyCode === 13){
				var val = $.trim(this.$el.val());
				
				if(val){
					this.collection.add({ title: val, tasks: []});
					this.$el.val("");
				}
			}
		}
	});

	return AddListView;

});