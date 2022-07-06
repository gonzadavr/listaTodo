import './style.css';


import {Todo, TodoList} from './classes';
import { crearTodoHTML } from './js/componentes';


export const todoList = new TodoList();
console.log(todoList.todos);

todoList.todos.forEach(todo => crearTodoHTML(todo));

 const newTodo = new Todo('Aprender JS');

// todoList.nuevoTodo(newTodo);

//todoList.todos[0].imprimirClase();
// newTodo.imprimirClase();

console.log('todos',todoList.todos);




// const tarea = new Todo('Aprender JS');


// todoList.nuevoTodo(tarea);


// tarea.completado=false;
// console.log(todoList);

// crearTodoHTML(tarea);

// localStorage.setItem('my-key', 'ABC123');

// sessionStorage.setItem('my-key', 'ABC123');

// setTimeout(()=>{
//     localStorage.removeItem('my-key');
// }, 1500);