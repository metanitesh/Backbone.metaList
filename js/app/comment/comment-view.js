define(['backbone', 'underscore', 'jquery', 'util'], function(Backbone, _, $, util) {

	'use strict';

	var CommentView = Backbone.View.extend({
		el: $(".comments"),

		tagName: "li",

		template: $("#comment-item").html(),

		initialize: function() {
			util.vent.on("commentAdded", this.renderComments, this);
			util.vent.on("listSelected", this.emptyView, this);
			util.vent.on("taskSelected", this.setup, this);

		},

		emptyView: function(){
			this.$el.empty();
		},

		setup: function(task) {
			this.model = task;
			this.model.on('destroy', this.emptyView, this);
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