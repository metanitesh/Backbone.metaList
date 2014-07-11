define(['ListModel'], function(ListModel) {
	
	describe('ListModel', function(){
			
		it('is sane', function(){

			/*given*/
			var list = new ListModel({ title : 'books'});
			
			/*then*/
			expect(typeof list).toEqual('object');
		});

		it("validate title", function(){

			/*given*/
			var list = new ListModel({ title : 'books'});

			/*when*/
			list.set("title", "", {validate: true});
			var title = list.get("title");
			
			/*then*/
			expect(title).toEqual("books");

			/*when*/
			list.set("title", "movies", {validate: true});
			title = list.get("title");
			
			/*then*/
			expect(title).toEqual("movies");
		});

	});

});
