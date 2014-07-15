define(['backbone'], function(Backbone) {

	"use strict";

	var TaskModel = Backbone.Model.extend({

		defaults: function() {
			return {
				content: '',
				comments: [],
				done: false
			};
		},

		validate: function(attrs) {
			if (!attrs.title.replace(/^\s+|\s+$/g, '')) {
				return "task must have title";
			}
		},

		initialize: function() {
			if (!this.get("id")) {
				this.set("id", this.genrateId());
			}
		}
	});

	return TaskModel;

});