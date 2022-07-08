//Referencias en el html

import { Todo } from "../classes";
import { todoList } from "..";


const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar =  document.querySelector('.clear-completed');
const ulFilters = document.querySelector('.filters');
const anchorFiltros =  document.querySelectorAll('.filtro');

export const crearTodoHTML = (todo)=>{

    const htmlTodo = `
    <li class="${(todo.completado) ? 'completed' : ''}" data-id=${todo.id}>
        <div class="view">
            <input class="toggle" type="checkbox" ${todo.completado?'checked':''}>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`

    const div  = document.createElement('div');

    div.innerHTML = htmlTodo;
    divTodoList.append(div.firstElementChild); //Elige el primer hijo quitando el div

    return div;

}


//EVENTOS


txtInput.addEventListener('keyup', (evento)=>{

    

    if(evento.keyCode===13 && txtInput.value.length>0){

        console.log(txtInput.value);
        const nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo(nuevoTodo);

        crearTodoHTML(nuevoTodo);
        txtInput.value=[];
    }

});

divTodoList.addEventListener('click',(evento)=>{

    console.log('click');
    console.log(evento.target.localName);

    const nombreElemento = evento.target.localName;
    const todoElemento = evento.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');

    console.log(todoElemento);
    console.log(todoId);
    
    if(nombreElemento.includes('input')){

        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');

    }else if(nombreElemento.includes('button')){

        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElemento);
    }
    console.log(todoList);
});

btnBorrar.addEventListener('click', (evento)=>{

    todoList.eliminarCompletados();

    for(let i = divTodoList.children.length-1;i>=0;i--){

        const elemento = divTodoList.children[i];
        console.log(elemento);
        if(elemento.classList.contains('completed')){
            divTodoList.removeChild(elemento);
        }
    }
    


});

ulFilters.addEventListener('click', (evento)=>{


    console.log(evento.target.text);
    const filtro = evento.target.text;
    if(!filtro) return;

    console.log(anchorFiltros);
    anchorFiltros.forEach(elemento => elemento.classList.remove('selected'));
    
    evento.target.classList.add('selected');


    for(const elemento of divTodoList.children){
    
        elemento.classList.remove('hidden');
        const completado =  elemento.classList.contains('completed');

        switch(filtro){

            case 'Pendientes':
                if(completado){
                    elemento.classList.add('hidden');
                }
            break;    

            case 'Completados':
                if(!completado){
                    elemento.classList.add('hidden');
                }
            break; 
        }
    }
});