'use strict';
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
                alert('Введите число!'); 
            }
        };
    }
};
appData.asking(); 
appData.expenses = {};
appData.expenses['ответ на первый вопрос: '] = [+amount1];
appData.expenses['ответ на второй вопрос: '] = [+amount2];

appData.budget = money;
appData.budgetDay = 0; 
appData.budgetMonth = 0;
appData.expensesMonth = 0;

appData.expensesMonth = function(){
    if (isNum(appData.expenses['ответ на первый вопрос: ']) === true && isNum(appData.expenses['ответ на второй вопрос: ']) === true){
        for(let arg in appData.expenses){
            return(appData.expenses['ответ на первый вопрос: ']/1 + appData.expenses['ответ на второй вопрос: ']/1);
        }
    }
};

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

let counter = 0;
for (let key in appData) {
  counter++;
}
console.log(counter);

for (let key in appData) {
    let value = appData[key];
    console.log(key + ": " + value); 
}
