define(['backbone', 'underscore', 'jquery'], function(Backbone, _, $) {

	'use strict';

	var NoteView = Backbone.View.extend({
		el: $(".note"),

		events: {
			"keypress" : "addContent"
		},

		initialize: function(){
			
			$(document).on("activeTask", function(e, task){
				this.model = task;
				this.$el.removeAttr("disabled").val(this.model.get("content"));	
			}.bind(this));
		},

		addContent: function(e){
			var val = $(e.target).val()
			if(val){				
				this.model.set("content", val);
			}
		}
	});

	return NoteView;

});