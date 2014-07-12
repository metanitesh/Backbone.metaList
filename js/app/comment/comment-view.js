define(['backbone', 'underscore', 'jquery'], function(Backbone, _, $) {

	'use strict';

	var CommentView = Backbone.View.extend({
		el: $(".comments"),

		tagName: "li",

		template: $("#comment-item").html(),

		initialize: function() {
			vent.on("commentAdded", this.renderComments, this);
			vent.on("taskSelected", this.setup, this);
		},

		setup: function(task) {
			this.model = task;
			this.renderComments(this.model);
		},

		renderComments: function() {
			this.$el.empty();
			_.each(this.model.get('comments'), function(comment) {

				var template = _.template(this.template);
				var html = template({
					comment: comment
				});

				this.$el.append(html)
			}, this);
		}
	});

	return CommentView;

});