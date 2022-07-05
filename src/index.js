import './style.css';

import{saludar}from'./js/componentes.js';

import {Todo, TodoList} from './classes'


const todoList = new TodoList();


const tarea = new Todo('Aprender JS');

console.log(tarea);