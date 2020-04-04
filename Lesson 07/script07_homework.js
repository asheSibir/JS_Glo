'use strict';
//УНИВЕРСАЛЬНАЯ ФОРМУЛА
const isNum = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
start = function(){
    do{
        money = prompt('Ваш месячный доход?','987654');
    }
    while(isNaN(money) || money === '' || money === null);
};   
start();
    
let expenses1 = prompt('Введите обязательную статью расходов?','Жилье'),
    amount1 = prompt('Во сколько это обойдется?',''),
    expenses2 = prompt('Введите обязательную статью расходов?','Питание'), 
    amount2 = prompt('Во сколько это обойдется?','');
 

let appData = {
    income: {}, 
    addIncome: [],
    expenses: {},
    addExpenses: [], 
    deposit: false, 
    mission: 456578, 
    period: 3,
    asking: function(){
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split('. ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        appData.getExpensesMonth = function(){
            if (isNum(amount1) === true && isNum(amount2) === true){
                alert (amount1/1 + amount2/1);
            } else {
                alert('Введите число!'); //Проследите чтобы тип данных значения свойств были числом!
            }
        };
    }
};
appData.asking(); //7.6) Сразу после объекта выполните вызов appData.asking();

//7.7) Перенести цикл из метода getExpensesMonth в метод asking, 
//и переписать цикл таким образом чтобы результат записывался в объект  appData.expenses
appData.expenses = {};
appData.expenses['ответ на первый вопрос: '] = [+amount1];
appData.expenses['ответ на второй вопрос: '] = [+amount2];

// const getExpensesMonth = function (a,b){
//     return((a / 1) + (b / 1));
// };
// alert('Расходы за месяц - ' + getExpensesMonth(amouexpensesnt1, amount2));

appData.budget = money;
appData.budgetDay = 0; 
appData.budgetMonth = 0;
appData.expensesMonth = 0;
//7.8) Переписать метод getExpensesMonth: с помощью цикла считаем сумму всех обязательных расходов 
//и сохраняем результат в свойство expensesMonth нашего объекта
//для того, чтобы посчитать сумму используйте цикл for in

appData.expensesMonth = function(){
    if (isNum(appData.expenses['ответ на первый вопрос: ']) === true && isNum(appData.expenses['ответ на второй вопрос: ']) === true){
        for(let arg in appData.expenses){
            return(appData.expenses['ответ на первый вопрос: ']/1 + appData.expenses['ответ на второй вопрос: ']/1);
        }
    }
};


//7.9) getAccumulatedMonth переименовать в getBudget. 
//Этот метод будет высчитывать значения свойств budgetMonth и budgetDay, 
//чтобы вычислить значения используем только свойства объекта (никаких внешних переменных)

let getAccumulatedMonth = function(){
    return((money / 1) - (appData.expenses['ответ на первый вопрос: ']/1) - (appData.expenses['ответ на второй вопрос: ']/1));
  };


let getBudget = {
    budgetMonth: [getAccumulatedMonth()]
};
getBudget.budgetDay = [getBudget.budgetMonth] / 30;



appData.getTargetMonth = function(){
        return (appData.mission / appData.accumulatedMonth);
};

// appData.getStatusIncome = function(); ТАКОЙ ФУНКЦИИ НЕ БЫЛО

//12) В консоль вывести: 
//— Расходы за месяц
//— За какой период будет достигнута цель (в месяцах)
//— Уровень дохода

console.log('Расходы за месяц: ' + appData.expensesMonth());
console.log('Цель будет достигнута за '+ Math.ceil(appData.mission / appData.expensesMonth()) + ' месяцев');
console.log('Уровень дохода - ' + (getBudget.budgetDay > 5000? 'высокий' : 'низкий'));

//13) Используя цикл for in для объекта (appData), 
//вывести в консоль сообщение "Наша программа включает в себя данные: " (вывести все свойства и значения)

// let keys = Object.keys(appData)
let counter = 0;
for (let key in appData) {
  counter++;
}
console.log(counter);

for (let key in appData) {
    let value = appData[key];
    console.log(key + ": " + value); 
}









