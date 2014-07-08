define(['backbone', 'underscore', 'jquery'], function(Backbone, _, $) {

	'use strict';

	var ListView = Backbone.View.extend({

		template: $('#list-item').html(),

		initialize: function() {

			this.render();
		},

		render: function() {
			var temp = _.template(this.template);
			var html = temp(this.model.toJSON());

			this.$el.append(html);
			return this;
		}
	});

	return ListView;

});