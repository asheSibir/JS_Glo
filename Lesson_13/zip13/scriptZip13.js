'use strict';

const todoControl = document.querySelector(".todo-control"),
    headerInput = document.querySelector(".header-input"),
    todoList = document.getElementById("todo"),
    todoCompleted = document.getElementById("completed");


const todoData = [
    // {
    //     value: '',
    //     completed: false,
    // },
    // {
    //     value: '',
    //     completed: true,
    // },    
];

const render = function(){
//очищаем введенное ранее
    todoList.textContent = '';
    todoCompleted.textContent = ''; 

    todoData.forEach(function(item){
        const li = document.createElement('li'); //добавляем li в документ
        li.classList.add('todo-item'); //добавляем класс для li
        //добавляем содержимое в li
        li.innerHTML = '<span class="text-todo">' + item.value + '</span>' + 
        '<div class="todo-buttons">' + 
            '<button class="todo-remove"></button>' + 
            '<button class="todo-complete"></button>' + 
        '</div>';

        //Условия для переноса значения в другой блок
        if (item.completed){
            todoCompleted.append(li);
        } else {
            todoList.append(li); //размещаем заполненную li на странице
        }

        const btnTodoCompleted = todoList.querySelector('.todo-complete');

        btnTodoCompleted.addEventListener('сlick', function(){
            btnTodoCompleted.style.backgroundcolor ='red';
            //item.completed = !item.completed; //текущее значение инвертируется в противоположное
            render();
        });

        
    });
};
todoControl.addEventListener('submit', function(event){ //нажатие кнопки
    event.preventDefault();//не дает page reload от нажатия кнопки (стандартное поведение)
    const newTodo = {
        value: headerInput.value,
        completed: false,
    };
    todoData.push(newTodo);
    render();
});

render(); //независимый от event вызов