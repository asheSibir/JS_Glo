'use strict';
let expenses1,
    expenses2,
    amount1,
    amount2,
    money = 5000,
    mission = 90000;

let firstQue = prompt('Введите обязательную статью расходов?', '');
expenses1 = firstQue;
let secQue = prompt('Во сколько это обойдется?', '');
amount1 = secQue;

firstQue = prompt('Введите обязательную статью расходов?', '');
expenses2 = firstQue;
secQue = prompt('Во сколько это обойдется?', '');
amount2 = secQue;

//ДОМАШКА к 4 уроку

// 1) Объявить функцию getExpensesMonth. Функция возвращает сумму всех обязательных расходов за месяц

// let outCome = function getExpensesMonth (a, b, callback){
//     if(typeof a === 'number' && typeof b === 'number'){
//         callback(a, b);
//     } else {
//         a = a / 1;
//         b = b / 1;
//         callback(a, b);
//     }
// };
// outCome(amount1, amount2, function(a, b){
//     return(a + b);
// });

const outCome = function getExpensesMonth2 (a, b){
    if (typeof parseInt(a) !== 'number' || typeof parseInt(b) !== 'number'){
        alert('некорректный ввод!');
    } else {
        a = parseFloat(a);
        b = parseFloat(b);
        return(a + b);
    }
};

//Расходы за месяц вызов getExpensesMonth
let needMyFunc = confirm('Вы хотите вызвать getExpensesMonth?');
alert(outCome(amount1, amount2));


//Вывод возможных расходов в виде массива
const getExpensesMonth = [];
getExpensesMonth[0] = {Type: expenses1, sum: amount1},
getExpensesMonth[1] = {Type: expenses2, sum: amount2};
console.table(getExpensesMonth);



//2) Объявить функцию getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы)
const Deposit = function getAccumulatedMonth (a, b, c) {
    if (typeof parseFloat(a) === 'number' || typeof parseFloat(b) === 'number' || typeof parseFloat(c) === 'number'){
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);
    return(a - b - c);
    } else {
        return 0;
    }
};
const getAccumulatedMonth = (Deposit(money, amount1, amount2));

//3) Объявить переменную accumulatedMonth и присвоить ей результат вызова функции getAccumulatedMonth 
const accumulatedMonth = Deposit(money, amount1, amount2);

//4) Объявить функцию getTargetMonth. Подсчитывает за какой период будет достигнута цель, 
//зная результат месячного накопления (accumulatedMonth) и возвращает результат
const getTargetMonth = function getTargetMonth (a, b){
    a = parseFloat(a);
    b = parseFloat(b);
    return (a / b);
};
console.log('Cрок достижения цели в месяцах - ' + getTargetMonth(mission, accumulatedMonth));


//5) Удалить из кода переменную budgetMonth

//6) budgetDay высчитываем исходя из значения месячного накопления (accumulatedMonth)
const budgetDay = function budgetDay (a, b){
    if (!isFinite(a) && !isFinite(b)){
        alert('Проверьте введенные данные!', '');
    } else {
        if ((a || b) === null || (parseFloat(a) || parseFloat(b)) === 'string'){
            return null;
        } else { 
            return (a / 1) / (b / 1);}}
    
};
console.log('Бюджет на день: ' + (budgetDay(accumulatedMonth,prompt('Сколько дней в месяце?',''))));

// 7) Почистить консоль логи и добавить недостающие, должны остаться:
//  - вызовы функции showTypeOf - неизвестна
//  - Расходы за месяц вызов getExpensesMonth
//  - Вывод возможных расходов в виде массива (addExpenses)
//  - Cрок достижения цели в месяцах (результат вызова функции getTargetMonth) 
//  - Бюджет на день (budgetDay)
//  - вызов функции getStatusIncome

const showTypeOf = function(a){
    return typeof a;
};


// // Лекция

// // function declaration (можно вызывать в любой момент, и до, и после кода функции)
// function nameOfThisFunc(name){
//     console.log('Hello ' + name);
// }
// nameOfThisFunc('Max');

// //fuction expression (вызывается только после кода)
// const callFunc = function(){
//     console.log();
// };

// //для вызова функции - ее имя и параметры (в скобках)

// //return
// const divide = function(a, b, c){
//     return a/b/c; //вывод функции
// };
// alert (divide(90, 3, 5));

// //Примеры
// let money1 = 0,
//     income = 1,
//     addExpenses = '...',
//     deposit1 = true,
//     mission1 = '...', 
//     period = 10;

// const showType = function(data){
//     return(data + ' - ' + typeof(data));
// };
// console.log(typeof(money));
// const tab =[showType(money)];
// tab[1] = showType(income);
// tab[2] = showType(addExpenses);
// tab[3] = showType(deposit1);
// tab[4] = showType(mission);
// console.table(tab);

// // анонимные, именнованные: после function, до (), нет/есть имя
// // вызов анонимной функции, завернутой в скобки:
// (function(){
//     console.log('Hello');
// }());
// (function(){
//     console.log('Hello');
// })();

// //функция с функцией
// const createF = function (a, b, callback){
//     if(typeof a === 'string' || 'number' && typeof b === 'string' || 'number'){
//         callback(a, b);
//     }
// };
// createF('Год: ', 2019+1, function(a, b){
//     console.log(a + b);
// });

// function one(callback){
//     console.log('делаем запрос'); //первое действие
//     setTimeout(function(){
//         console.log('обработка');
//         callback();    
//     }, 5);
// }

// function two(){
//     console.log('вывод результата');
// }
// one(two);


