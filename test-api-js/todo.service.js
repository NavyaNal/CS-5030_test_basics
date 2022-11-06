class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(todo){
        this.todo_data.todo.push(todo)
        return this.todos

    }

    delete_todo(id){
        for (var i = 0; i < this.todo_data.todo.length; i++) {
            var obj = this.todo_data.todo[i];
        
            if (obj.title == id) {
                this.todo_data.todo.splice(i, 1);
            }
        }
        return this.todos
    }



    update_todo(id, todo){
        // Your code here
    }
}


module.exports= todoservice;