import {TodoList} from './todolist.js';

window.addEventListener('DOMContentLoaded', () => {

// Initialize the TodoList object
    const myTodoList = new TodoList();

// Get references to the input field and button
    const todoInput = document.getElementById('addTodoInput');
    const addTodoButton = document.getElementById('addTodoButton');

// Add an event listener to the button to add a task
addTodoButton.addEventListener('click', () => {
    const newTodo = todoInput.value;
    myTodoList.addTodo(newTodo);
    todoInput.value = ''; // Clear the input field
});

    
})
