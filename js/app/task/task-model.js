define(['backbone'], function(Backbone) {

	"use strict";

	var TaskModel = Backbone.Model.extend({

		defaults: {
			content: '',
			comments: [],
			done: false
		},

		validate: function(attrs) {
			if (!attrs.title.replace(/^\s+|\s+$/g, '')) {
				return "task must have title";
			}
		}
	});

	return TaskModel;

});