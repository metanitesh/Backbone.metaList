define(['backbone', 'underscore', 'jquery', 'util'], function(Backbone, _, $, util) {

	'use strict';

	var ResponsiveView = Backbone.View.extend({

		el: 'body',

		events: {

			"click .menu-list": "displayList",
			"click .menu-task": "displayTask",
			"click .menu-detail": "displayDetail",

		},

		initialize: function() {
			this._hideAll();
			this.displayTask();
			util.vent.on("listSelected", this.displayTask, this);
			util.vent.on("taskSelected", this.displayDetail, this);
		},



		_hideAll: function() {
			this.$el.find("#sidebar").addClass("hide-mobile");
			this.$el.find("#main-content").addClass("hide-mobile");
			this.$el.find("#detail").addClass("hide-mobile");
			this.$el.find(".mobile_menu-item").removeClass("mobile-menu-active");
		},

		displayList: function() {
			this._hideAll();
			this.$el.find("#sidebar").removeClass("hide-mobile");
			this.$el.find('.menu-list').addClass("mobile-menu-active");
		},

		displayTask: function() {
			this._hideAll();
			this.$el.find("#main-content").removeClass("hide-mobile");
			this.$el.find('.menu-task').addClass("mobile-menu-active");
		},

		displayDetail: function() {
			this._hideAll();
			this.$el.find("#detail").removeClass("hide-mobile");
			this.$el.find('.menu-detail').addClass("mobile-menu-active");
		}

	});

	return ResponsiveView;

});