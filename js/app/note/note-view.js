define(['backbone', 'underscore', 'jquery', 'util'], function(Backbone, _, $, util) {

	'use strict';

	var NoteView = Backbone.View.extend({
		el: $(".note"),

		events: {
			"keypress" : "addContent"
		},

		initialize: function(){
			util.vent.on('listSelected', this.disableView, this);
			util.vent.on('taskSelected', this.setup, this);
		},

		setup: function(task){
			this.model = task;
			this.$el.removeAttr("disabled").val(this.model.get("content"));
		},

		disableView: function(){
			this.$el.val("");
			this.$el.attr("disabled", "disabled");
		},

		addContent: function(e){
			var val = $(e.target).val();
			if(val){
				this.model.set("content", val);
				this.model.view.activeTaskState();
			}
		}
	});

	return NoteView;

});