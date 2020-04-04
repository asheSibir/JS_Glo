'use strict';
let money,
start = function(){
    do{
        money = prompt('Ваш месячный доход?', 555555);
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
        return((amount1 / 1) + (amount2 / 1));
    }
};
appData.asking();

appData.budget = money;
appData.budgetDay = 0; 
appData.budgetMonth = 0;
appData.expensesMonth = 0;

appData.expenses = function(){
    getExpensesMonth = function (a,b){
        return((a / 1) + (b / 1));
    };
    // alert('Расходы за месяц - ' + getExpensesMonth(amount1, amount2));
}

appData.getAccumulatedMonth = function(){
    return((money / 1) - (amount1 / 1) - (amount2 / 1));
};

appData.accumulatedMonth = appData.getAccumulatedMonth();

appData.getTargetMonth = function(){
        return (appData.mission / appData.accumulatedMonth);
};

// appData.getStatusIncome = function(); ТАКОЙ ФУНКЦИИ НЕ БЫЛО


console.log(appData.addExpenses.length);
console.log('Период равен ' + appData.period + ' месяцев'); 
console.log('Цель заработать ' + appData.mission + ' рублей/долларов/гривен/юани');

appData.money = prompt('Ваш месячный доход?','987654');



let helper = appData.mission / appData.accumulatedMonth;
console.log(Math.ceil(helper));

const getExpensesMonth = function (a,b){
    return((a / 1) + (b / 1));
};
// alert('Расходы за месяц - ' + getExpensesMonth(amount1, amount2));





