define(['backbone', 'underscore', 'jquery'], function(Backbone, _, $) {

	'use strict';

	var ActionbarView = Backbone.View.extend({

		el: $("#actionbar"),

		events: {
			'click .save': 'saveLocal'
		},

		initialize: function() {
			

		},

		saveLocal: function(){
			var listCollection = _.each(APP.listCollection.toJSON(), function(list){
				list.tasks = list.tasks.toJSON();
				// console.log(list.tasks)
			});

			localStorage.metaListBackbone = JSON.stringify(listCollection);
			this.$el.find('.save-frame').fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100)			
			
		}
	});

	return ActionbarView;

});