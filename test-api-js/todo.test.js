

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
    request(app)
      .post("/add-todolist")
      .send({
        title: "T12",
        description: "D12",
        done: false,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.todo.length).toEqual(4);
        return done();
      });
    });



});