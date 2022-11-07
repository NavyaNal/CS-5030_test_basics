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
        
            if (obj.id == id) {
                this.todo_data.todo.splice(i, 1);
            }
        }
        return this.todos
    }



    update_todo(id, todo){
    
        //getting index of todo where id matches
        var index = this.todos.todo.findIndex(todo_update => todo_update.id == id);

        this.todos.todo[index].id = todo.id;
        this.todos.todo[index].title = todo.title;
        this.todos.todo[index].description = todo.description;
        this.todos.todo[index].done = todo.done;
        return this.todos;
    }
}


module.exports= todoservice;