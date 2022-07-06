import './style.css';


import {Todo, TodoList} from './classes';
import { crearTodoHTML } from './js/componentes';


export const todoList = new TodoList();



const tarea = new Todo('Aprender JS');


todoList.nuevoTodo(tarea);


tarea.completado=false;
console.log(todoList);

crearTodoHTML(tarea);
