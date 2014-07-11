define(['TaskModel'], function(TaskModel) {
	
	describe('TaskModel', function(){
			
		it('is sane', function(){

			/*given*/
			var task = new TaskModel({ title : 'books'});
			
			/*then*/
			expect(typeof task).toEqual('object');
		});

		it("should validate title", function(){

			/*given*/
			var task = new TaskModel({ title : 'The war of art'});

			/*when*/
			task.set("title", "", {validate: true});
			var title = task.get("title");
			
			/*then*/
			expect(title).toEqual('The war of art');

			/*when*/
			task.set("title", "turning pro", {validate: true});
			title = task.get("title");
			
			/*then*/
			expect(title).toEqual("turning pro");
		});

		it("should set defaults", function(){
			
			/*when*/
			var task = new TaskModel({ title : 'The war of art'});
			
			/*then*/
			expect(task.toJSON().comments).toBeDefined();
			expect(task.toJSON().content).toBeDefined();
			expect(task.toJSON().done).toBeDefined();
		});

	});

});
