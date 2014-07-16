define(['backbone', 'underscore', 'jquery', 'util'], function(Backbone, _, $, util) {

	'use strict';

	var AddCommentView = Backbone.View.extend({
		el: $('.add-comment'),

		events: {
			'keypress': 'addComment'
		},

		initialize: function() {
			util.vent.on('listSelected', this.disableView, this);
			util.vent.on('taskSelected', this.setup, this);
		},

		disableView: function() {
			this.$el.attr('disabled', 'disabled');
		},

		setup: function(task) {
			this.model = task;
			this.$el.removeAttr('disabled');
		},

		addComment: function(e) {
			if (e.keyCode === 13) {
				var val = $(e.target).val();
				if (val) {
					this.model.get('comments').push(val);
					util.vent.trigger('commentAdded');
					$(e.target).val('');
				}
			}
		}
	});

	return AddCommentView;

});