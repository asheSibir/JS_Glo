'use strict';

const todoControl = document.querySelector(".todo-control"),
    headerInput = document.querySelector(".header-input"),
    todoList = document.querySelector(".todo-list"),
    ulTodoCompleted = document.getElementById('completed');


const todoData = [];

const render = function(){

    todoList.textContent = '';
    ulTodoCompleted.textContent = ''; 

    todoData.forEach(function(item){
        const li = document.createElement('li'); 
        li.classList.add('todo-item'); 
        
        li.innerHTML = '<span class="text-todo">' + localStorage.keyText + '</span>' + 
        '<div class="todo-buttons">' + 
            '<button class="todo-remove"></button>' + 
            '<button class="todo-complete"></button>' + 
        '</div>';
        
        if (item.completed){
            ulTodoCompleted.append(li);
        } else {
            todoList.append(li); 
        }

        const btnTodoCompleted = li.querySelector('.todo-complete');

        btnTodoCompleted.addEventListener('сlick', function(){
            item.completed = !item.completed;
            render();
        });

        const btnTodoRemove = li.querySelector('.todo-remove');
        btnTodoRemove.addEventListener('click', function(){
            li.remove();
        });
        
                
        
        
    });
};
let account = 0;
todoControl.addEventListener('submit', function(event){ 
    event.preventDefault();
    if (headerInput.value !== ''){
        const newTodo = {
            value: headerInput.value,
            completed: false
        };
                
        todoData.push(newTodo);
        localStorage.keyText = todoData[account].value;
        account++;
        render();
        headerInput.value = '';
    }
});

render(); 

