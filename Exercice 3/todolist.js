

class TodoList {
   
    constructor () {
        this.#todos = [];
    }
    
    addTodo(todo) {
        if(todo) {
            this.#todos.push(todo);
            this.displayTodos();
        }
    }
    
    displayTodos() {
        const ulElement = document.getElementById('todoList');
        ulElement.innerHTML = ''; // Clear the existing list

        this.todos.forEach(todo => {
            const liElement = document.createElement('li');
            liElement.textContent = todo;
            ulElement.appendChild(liElement);
        });
    }
}

export {ToDoList};