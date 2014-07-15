define(['jquery', 'underscore', 'app', 'util'], function($, _, APP, util) {

	'use strict';

	$(function() {
		var preloadImages = ["icon-sprite.png", "detail.png", "list-active.jpg", "logo_bg.png", "task.png", "sidebar.png", "tweed.png"];
		util.imageLoader(preloadImages).done(function() {

			window.APP = APP.init();

		});
	});

});