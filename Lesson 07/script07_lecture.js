'use strict';
// let car = {
//     model: 'mazda',
//     year: 2006
// };

// car.turbocharging = true; //добавление нового свойства после инициализации объекта

// car.stop = stop;
// car.stop();
// console.log(car);


// function stop(){
//     console.log('Машина стоит со скоростью 0 км/ч');
// }

// console.log(car);

// car['Коробка передач'] = 'автомат'; //если несколько слов, то []
// let nameOf = 'Имя владельца';
// let user = 'Андрей';
// car[nameOf] = user;//если переменная, то []

// console.log(car);

// //МАССИВЫ
// //Свойство Arr.length - количество элементов в массиве

// //добавить новый элемент в массив можно так:
// // arr[arr.length] = ... (потому что длина массива - это индекс последнего элемента + 1)

// //Перебор ключей массива
// // FOR (... IN ...) ЭТО ИНДЕКСЫ, КЛЮЧИ!!!
// for (let key in car){
//     console.log('Ключ: ' + key + ', Свойство: '+car[key]);
// }
// // FOR (... OF ...) ЭТО САМИ СВОЙСТВА!
// for (let item of arr){
//     console.log(item);
// }

// //Выведение свойств массива
// let arr = [1, 8, 6, 52, 34, 123];
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// arr.forEach(function(item, i, array){ //item - элемент массива, i - индекс элемента, array (должен быть назван иначе, чем родитель) - весь массив
//     console.log(item, i, array);
// });

//ПРАКТИКА
let money,
    start = function(){
    do{
        money = prompt('Ваш месячный доход', '100000');
    } while(!isNan(money) || money === '' || money === null);
    };
    start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {}
    addExpenses: [] 
    deposit: false,
    mission: 500000,
    period: 3
    asking: function(){
        let addExpenses = prompt('Перечислите возможные расходы');
        appData.addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у Вас депозит в банке?');
    }
};


