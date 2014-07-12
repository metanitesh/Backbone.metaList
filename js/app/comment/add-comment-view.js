define(['backbone', 'underscore', 'jquery'], function(Backbone, _, $) {

	'use strict';

	var AddCommentView = Backbone.View.extend({
		el: $(".add-comment"),

		events: {
			"keypress": "addComment"
		},

		initialize: function() {
			vent.on('taskSelected', this.setup, this);
		},

		setup: function(task) {
			this.model = task;
			this.$el.removeAttr("disabled");

		},

		addComment: function(e) {
			if (e.keyCode === 13) {
				var val = $(e.target).val();
				if (val) {
					this.model.get("comments").push(val);
					vent.trigger("commentAdded");
					$(e.target).val("");
				}
			}
		}
	});

	return AddCommentView;

});