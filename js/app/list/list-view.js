define(['TaskCollection', 'TaskCollectionView', 'AddTaskView', 'backbone', 'underscore','jquery'], function( TaskCollection, TaskCollectionView, AddTaskView, Backbone, _, $) {

	'use strict';

	var ListView = Backbone.View.extend({

		tagName: 'li',

		className: 'list',

		template: $('#list-item').html(),

		events: {
			'click': 'select',
			'dblclick .title': 'EditViewState',
			'click .delete-list': 'destroy',
			'keypress .edit-list-input': 'update',
		},


		initialize: function() {

			this.listenTo(this.model, 'destroy', this.remove);
			this.listenTo(this.model, 'change', this.updateView);
			this.listenTo(this.model, 'invalid', this.showError);
			this.render();
		},


		resetAllListState: function() {
			this.$el.siblings('.list').removeClass('list-active');
			this.$el.siblings('.list').find('.input-wrapper').addClass('hidden');
			this.$el.siblings('.list').find('.title').removeClass('hidden');

			this.$el.siblings('.list').find('.icon-list').removeClass('icon-list-active');
			this.$el.siblings('.list').find('.delete-list').removeClass('icon-delete-active');
		},

		activeListState: function() {
			this.$el.addClass('list-active');
			this.$el.find('.edit-list').addClass('icon-list-active');
			this.$el.find('.delete-list').addClass('icon-delete-active');
		},


		EditViewState: function() {
			this.$el.find('.input-wrapper').removeClass('hidden');
			this.$el.find('.title').addClass('hidden');
		},

		select: function(e) {
			this.resetAllListState();			
			APP.router.navigate(this.model.get('id'), { trigger: true});
		},

		update: function(e) {
			if (e.keyCode === 13) {
				var val = this.$el.find('.edit-list-input').val();
				if (val) {
					this.model.set('title', val, {validate: true});
				}
			}
		},

		updateView: function() {
			this.$el.empty();
			this.render();
			this.activeListState();
		},

		destroy: function(e) {
			e.stopPropagation();
			this.model.destroy();
			APP.router.navigate('', { trigger: true});

		},


		render: function() {
			var compiled = _.template(this.template);
			var html = compiled(this.model.toJSON());

			this.$el.append(html);
			return this;
		},

		showError: function(model, error){
			alert(error);
		}
	});

	return ListView;

});