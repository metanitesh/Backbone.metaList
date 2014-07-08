define([ 'ListModel', 'backbone', 'underscore', 'jquery'], function(ListModel, Backbone, _, $) {

	'use strict';

	var ListCollection = Backbone.Collection.extend({
		model: ListModel
	});

	return ListCollection;

});