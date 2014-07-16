define(['ListCollection'], function(ListCollection) {

	describe('ListCollection', function() {

		it('is sane', function() {

			/*given*/
			var listCollection = new ListCollection();

			/*then*/
			expect(typeof listCollection).toEqual('object');
		});

		it('can store listmodels', function() {

			/*given*/
			listCollection = new ListCollection();

			/*when*/
			listCollection.add([{
				title: 'books'
			}, {
				title: 'movie'
			}]);

			/*then*/
			expect(listCollection.at(0).get('title')).toEqual('books');
			expect(listCollection.at(1).get('title')).toEqual('movie');
		})	
	});

});