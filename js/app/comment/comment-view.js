define(['backbone', 'underscore', 'jquery'], function(Backbone, _, $) {

	'use strict';

	var CommentView = Backbone.View.extend({
		el: $(".comments"),

		tagName: "li",

		template: $("#comment-item").html(),

		initialize: function(){
			$(document).on("commentadded", function(){
				this.renderComments();
			}.bind(this));

			$(document).on("activeTask", function(e, task){
				this.model = task;
				this.renderComments(this.model);	
			}.bind(this));
		},

		renderComments: function(){
			this.$el.empty();
			// console.log(this.model.get("comments"))
			_.each(this.model.get('comments'), function(comment){

				var template = _.template(this.template);
				var html = template({comment: comment});
				console.log(html);

				this.$el.append(html)	
			}, this);	
		}
	});

	return CommentView;

});