define(['backbone', 'underscore', 'jquery'], function(Backbone, _, $) {

	'use strict';

	var NoteView = Backbone.View.extend({
		el: $(".note"),

		events: {
			"keypress" : "addContent"
		},

		initialize: function(){
			vent.on('taskSelected', this.setup, this);
		},

		setup: function(task){
			this.model = task;
			this.$el.removeAttr("disabled").val(this.model.get("content"));
		},

		addContent: function(e){
			var val = $(e.target).val();
			if(val){
				this.model.set("content", val);
			}
		}
	});

	return NoteView;

});