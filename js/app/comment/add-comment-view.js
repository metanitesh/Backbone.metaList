define(['backbone', 'underscore', 'jquery'], function(Backbone, _, $) {

	'use strict';

	var AddCommentView = Backbone.View.extend({
		el: $(".add-comment"),

		events: {
			"keypress" : "addComment"
		},

		initialize: function(){
			
			$(document).on("activeTask", function(e, task){
				this.model = task;
				this.$el.removeAttr("disabled");
			}.bind(this));
		},

		addComment: function(e){
			if(e.keyCode === 13){
				var val= $(e.target).val();
				if(val){
					this.model.get("comments").push(val);
					$(document).trigger("commentadded");
					$(e.target).val("");
				}
			}
		}
	});

	return AddCommentView;

});