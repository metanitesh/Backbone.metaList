define(['backbone'], function(Backbone) {
	
	var util = {
		vent: _.extend(Backbone.Events),
		
		imageLoader: function(imageArr) {

			var loadedImages = 0;
			var images = [];
			var postAction = function() {};
			var postLoad = function() {
				loadedImages++;
				if (loadedImages === imageArr.length) {
					postAction(images);
				}
			};

			var success = function() {
				postLoad();
			};

			var fail = function() {
				postLoad();
			};
			for (var i = 0; i < imageArr.length; i++) {
				var src = 'images/' + imageArr[i];
				images[i] = new Image();
				images[i].src = src;
				images[i].onload = success;
				images[i].onError = fail;

			}

			return {
				done: function(f) {
					postAction = f || postAction;
				}
			};
		}
	};


	return util;
});