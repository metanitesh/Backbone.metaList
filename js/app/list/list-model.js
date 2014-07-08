define(['backbone'], function(Backbone){
	
	"use strict";

	var ListModel = Backbone.Model.extend({

		validate:function(attrs){

			if(!attrs.title){
				return "list must have titles";
			}

		}
	});
	

	return ListModel;

});