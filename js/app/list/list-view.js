define(['backbone', 'underscore', 'jquery'], function(Backbone, _, $) {

	'use strict';

	var ListView = Backbone.View.extend({

		tagName: 'li',

		className: 'list',

		template: $('#list-item').html(),

		events: {
			'click': 'activeTitle',
			'dblclick .title': 'adtiveEditView',
			'click .delete-list': 'destroy',
			'keypress .edit-list-input': 'update',
		},


		initialize: function(){
			
			this.model.on("destroy", this.remove, this);
			this.model.on("change", this.reRender, this);
			this.render();
		},

		activeTitle: function(e){

			this.$el.siblings(".list").removeClass("list-active");
			this.$el.siblings(".list").find(".input-wrapper").addClass("hidden");
			this.$el.siblings(".list").find(".title").removeClass('hidden');

			this.$el.siblings(".list").find(".icon-list").removeClass('icon-list-active');
			this.$el.siblings(".list").find(".delete-list").removeClass('icon-delete-active');

			this.$el.addClass("list-active");
			this.$el.find(".edit-list").addClass('icon-list-active');
			this.$el.find(".delete-list").addClass('icon-delete-active');
		},

		adtiveEditView: function(){
			this.$el.find(".input-wrapper").removeClass('hidden');
			this.$el.find(".title").addClass('hidden');
		},

		update: function(e){
			if(e.keyCode === 13){
				var val = this.$el.find(".edit-list-input").val();
				if(val){
					this.model.set("title", val);
				}
			}

		},

		reRender: function(){
			
			this.$el.empty();
			this.render();
			this.activeTitle();
		},

		destroy: function(){
			this.model.destroy();
		},

		remove: function(){
			this.$el.remove();
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