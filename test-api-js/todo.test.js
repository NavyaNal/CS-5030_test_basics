

var todoservice = require('./todo.service.js');
describe('todo test suite', () => {

    test("truth_value", () => {
        expect(true).toBe(true);
    });
    
    let todo_service = new todoservice();

    test("if service instance is created", () => {
        expect(todo_service instanceof todoservice).toBe(true);
    });

    
    // Initial length of the todo list is 3 // 3 default tasks
    test("get_todos", () => {
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });

    // TEST CASE FOR ADD TODO
   test("ADD TODO /", (done) => {
    
    //timer set to 10s to overcome timeout issue
    setTimeout(done, 10); 
       todo_service.add_todo({
      "title": "T2",
      "description": "D2",
      "done": false
       });

      expect(todo_service.get_todos().todo.length).toEqual(4);
    });

    test("DELETE TODO /", (done) => {
      //timer set to 10s to overcome timeout issue
      setTimeout(done, 10); 
      todo_service.delete_todo("T2");
      expect(todo_service.get_todos().todo.length).toEqual(3);
    });


});



