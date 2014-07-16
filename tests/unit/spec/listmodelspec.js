define(['ListModel'], function(ListModel) {

	describe('ListModel', function() {

		it('is sane', function() {

			/*given*/
			var list = new ListModel({
				title: 'books'
			});

			/*then*/
			expect(typeof list).toEqual('object');
		});

		it('validate title', function() {

			/*given*/
			var list = new ListModel({
				title: 'books'
			});

			/*when*/
			list.set('title', '', {
				validate: true
			});
			var title = list.get('title');

			/*then*/
			expect(title).toEqual('books');

			/*when*/
			list.set('title', 'movies', {
				validate: true
			});
			title = list.get('title');

			/*then*/
			expect(title).toEqual('movies');
		});

		it('should create child taskCollection', function() {

			/*given*/
			data = {
				title: 'to-do',
				tasks: [{
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
				}]
			};
			

			/*when*/
			var list = new ListModel(data);
			expect(list.get('tasks').toJSON).toBeDefined();
			expect(list.get('tasks').parent).toEqual(list);

		});

	});
	
});