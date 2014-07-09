define([ 'TaskModel', 'backbone', 'underscore', 'jquery'], function(TaskModel, Backbone, _, $) {

	'use strict';

	var TaskCollection = Backbone.Collection.extend({
		model: TaskModel
	});

	return TaskCollection;

});