

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

      todo_service.add_todo({"id":1,
      "title": "T2",
      "description": "D2",
      "done": false
       })
       todo_service.add_todo({"id":2,
      "title": "T3",
      "description": "D3",
      "done": false});

      expect(todo_service.get_todos().todo.length).toEqual(5);

    });


    // TEST CASE FOR DELETE TODO
    test("DELETE TODO /", (done) => {

      //timer set to 10s to overcome timeout issue
      setTimeout(done, 10); 

      todo_service.delete_todo(1);
      expect(todo_service.get_todos().todo.length).toEqual(4);

    });


    // TEST CASE FOR UPDATE TODO
    test("UPDATE TODO /", (done) => {

      //timer set to 10s to overcome timeout issue
      setTimeout(done, 10); 

      todo_service.update_todo(2,{
        "id":1,
        "title": "T1",
        "description": "D3",
        "done": true,
      });

      //getting index of provided id
      var index = todo_service.get_todos().todo.findIndex(todo_update => todo_update.id == 1);

      expect(todo_service.get_todos().todo[index].id).toEqual(1);
      expect(todo_service.get_todos().todo[index].title).toEqual("T1");
      expect(todo_service.get_todos().todo[index].done).toEqual(true);

      



    });
});
