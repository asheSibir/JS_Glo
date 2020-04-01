'use strict';
//ДОМАШКА
//1) Переписать функцию start циклом do while
let isNumber = function(n){
        return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;

let start = function(){
    do{
        money = prompt('Ваш месячный доход', '100');
    } while(!isNumber(money));
};
start();

//2) Добавить проверку что введённые данные являются числом, 
//которые мы получаем на вопрос 'Во сколько это обойдется?’ в функции  getExpensesMonth
let expenses1 = prompt('Статья расходов 1','Жилье'),
    expenses1Amount = prompt('Сумма',''),
    expenses2 = prompt('Статья расходов 2','Продукты'),
    expenses2Amount = prompt('Сумма','');

const getExpensesMonth = function (){
    if (!isNumber(expenses1Amount) && !isNumber(expenses1Amount)){
        prompt('Для расчетов необходимо вводить только числа!');
    } else {
        return expenses1Amount * 1 + expenses2Amount * 1;
    }
};
console.log('Расходы за месяц - ' + getExpensesMonth());

//3) Если getTargetMonth возвращает нам отрицательное значение, 
//то вместо “Цель будет достигнута” необходимо выводить “Цель не будет достигнута”
let mission = 30000000;
let accumulatedMonth = 3200;
const getTargetMonth = function (a, b){
    a = a / 1;
    b = b / 1;
    if ((a / b) < 0){
        alert('Цель не будет достигнута');
    } else {
    return 'Цель будет достигнута. Cрок достижения цели в месяцах - ' + (a / b) + ' (' + (a / b / 12) + ' год(а))';
    }
};
console.log(getTargetMonth(mission, accumulatedMonth));



















// Лекция
//Рекурсия
// function changeTires(snowTires){
//     snowTires--;
//     console.log(snowTires);

//     if(snowTires>0){
//         changeTires(snowTires);
//     }
// }
// changeTires(4);

//WHILE
// let n = 0;
// while(n < 5){
//     console.log(n);
//     n++;
// }

// DO WHILE 
//(отличие от WHILE в том, что 1 иттерация произойдет в любом случае, даже если условие false)
// do{
//     console.log(n);
//     n++;
// }
// while(n < 5);

//FOR. IF. 
// for(let i = 0; i < 5; i++){
//     if(1 === 3){
//         break; // останавливает дальнейший код
//         continue; //не выполняет эту иттерацию, но дальше продолжает
//     }
//     console.log(i);
// };


// ПРАКТИКА
// let expenses1 = prompt('Статья расходов 1',''),
//     expenses1Amount = prompt('Сумма',''),
//     expenses2 = prompt('Статья расходов 2',''),
//     expenses2Amount = prompt('Сумма','');
// let expenses = [];

// let getExpensesMonth = function (){
//     let sum = 0;

//     for (let i = 0; i < 2; i++){
//         expenses[i] = prompt('Статья расходов', 'Жилье');
        
//         sum += +prompt('Сумма');
//     }
//     console.log(sum);
//     return sum;
// };
// getExpensesMonth();
// console.log('расходы за месяц: ' + getExpensesMonth());
// let expensesAmount = getExpensesMonth();

//ПОЛЕЗНАЯ ФУНКЦИЯ
// let isNumber = function(){
//     return !isNaN(parseFloat(n)) && isFinite(n)
//}

// let money;
// let start = function(){
//     money = prompt('Ваш месячный доход', '100');
//     while (isNaN(money) || money.trim() === '' || money === null){
//         money = prompt('Ваш месячный доход', '100');
//     }
//     console.log(money);
// };
// start();

