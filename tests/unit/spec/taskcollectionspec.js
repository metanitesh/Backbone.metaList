define(['TaskCollection'], function(TaskCollection) {

	describe('TaskCollection', function() {

		it('is sane', function() {

			/*given*/
			var taskCollection = new TaskCollection();

			/*then*/
			expect(typeof taskCollection).toEqual('object');
		});

		it('can store taskModel', function() {

			/*given*/
			taskCollection = new TaskCollection();

			/*when*/
			taskCollection.add([{
				'title': 'clean house',
				'comments': ['after lunch', 'maybe tomorrow', 'doesn\'t look that bad'],
				'content': 'it\'s been ages man !',
				'done': false
			}, {
				'title': 'get a haircut',
				'comments': ['will do this weekend'],
				'content': 'this could be a good reason to become a monk',
				'done': true
			}, {
				'title': 'buy grocery',
				'comments': [],
				'content': '1. eggs\n2. apples\n3. bread \n4. wine',
				'done': false
			}]);

			/*then*/
			expect(taskCollection.at(0).get('title')).toEqual('clean house');
			expect(taskCollection.at(1).get('title')).toEqual('get a haircut');
			expect(taskCollection.at(2).get('title')).toEqual('buy grocery');
		});
	});

});