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

let appData = {
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    income: {}, 
    addIncome: [],
    expenses: [],
    addExpenses: [], 
    expensesMonth: 0,
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 456578, 
    period: 3,
    asking: function(){
            
        if (confirm('Есть ли у Вас дополнительные источники дохода?')){
            
            let itemIncome;
            do{
                itemIncome = prompt('Какой у Вас есть дополнительный заработок?','Таксую');
            } while (itemIncome === null);
            
            let cashIncome; 
            do{
                cashIncome = prompt('Сколько это дает?',10000);
            } while (cashIncome === '' || cashIncome === null || isNaN(cashIncome));
            appData.income[itemIncome] = cashIncome;
        }   

        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split('. '); 
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        for (let i = 0; i < 3; i++) {

            let itemExpenses;
            do{
                itemExpenses = prompt('Введите обязательную статью расходов?','Жилье, питание, транспорт'); 
            } while (itemExpenses === '' || itemExpenses === null|| itemExpenses === 'Жилье, питание, транспорт');

            let cashExpenses;
            do{
              cashExpenses = prompt('Во сколько это обойдется?','');
            }
            while (cashExpenses === "" || cashExpenses === null || isNaN(cashExpenses));  
            
            appData.expenses.push(cashExpenses); 
          }
    },

    getExpensesMonth: function () {
        for (let i = 0; i < appData.expenses.length; i++) {
        appData.expensesMonth += +appData.expenses[i];
        }   
    },
   
    getBudget: function () {
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },

    getTargetMonth: function () {
        return appData.mission / appData.budgetMonth;
    },

    getStatusIncome: function () {
        if (appData.budgetDay > 800) {
            return ('Высокий уровень дохода');
        } else if (appData.budgetDay > 300) {
            return ('Средний уровень дохода');
        } else if (appData.budgetDay > 0) {
            return ('Низкий уровень дохода');
        } else {
            return('Что-то пошло не так!');
        }
    },
    getInfoDeposit: function(){
        if (appData.deposit){
            do{
                appData.moneyDeposit = prompt('Какая сумма депозита?','10000');
            } while (isNaN(appData.moneyDeposit) || appData.moneyDeposit === null || appData.moneyDeposit ===' ');
            do{
                appData.percentDeposit = prompt('А под какой процент?','10%');
            } while (appData.percentDeposit === ' ' || appData.percentDeposit === null || isNaN(appData.percentDeposit));
            
        }
    },
    calcSavedMoney: function (){
        return appData.budgetMonth * appData.period;

    }
};
appData.asking(); 
appData.getExpensesMonth();
appData.getBudget();

if (appData.getTargetMonth() > 0) {
    console.log('Цель будет достигнута за ' + Math.ceil(appData.getTargetMonth()) + 'месяцев');
} else {
    console.log('Цель не будет достигнута');
}

for (let key in appData){
    console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
}
appData.getInfoDeposit();

// можно удалить:
console.log('Расходы за месяц: ' + appData.expensesMonth);
console.log(appData.budgetMonth);
console.log(appData.calcSavedMoney);
console.log(appData.percentDeposit);
console.log(appData.moneyDeposit);
console.log(appData.addExpenses);


let elAddExpenses = appData.addExpenses.join(','); //преобразование массива в строку
let elements = elAddExpenses.split(', '); // строку бьет на новый массив, каждый элемент отделен ", "

for (let i of elements){
    let fLet = (i.substring(0,1)).toUpperCase();
    i = fLet + i.slice(1);
    console.log(i);
}

let incomeBlock = document.querySelector('income');
let additionalBlock = document.querySelector('additional_income');


let button = document.getElementById('start');

let buttonPlus1 = document.getElementsByClassName('.income_add');
let buttonPlus2 = document.getElementsByClassName('.expenses_add');
let checkboxDeposit = document.querySelector('#deposit-check');
let addIncomeInput = document.querySelectorAll('.additional_income-item');
let result = document.querySelector('.result');
let resultBudgetMonth = result.querySelector('.budget_month-value');
let resultBudgetDay = result.querySelector('.budget_day-value');
let resultExpensesMonth = result.querySelector('.expenses_month-value');
let resultAddIncome = result.querySelector('.additional_income-value');
let resultAddExp = result.querySelector('.additional_expenses-value');
let resultIncomePeriod = result.querySelector('.income_period-value');
let resultTargetPeriod = result.querySelector('.target_month-value');

let salaryAmount = document.querySelector('.salary-amount');
let incomeNameInput = incomeBlock.querySelector('[placeholder="Наименование"]');
let incomeSumInput = incomeBlock.querySelector('[placeholder="Сумма"]');
let addNameInput = additionalBlock.getElementsByTagName('placeholder')[0];




console.log(button);
console.log(buttonPlus1);
console.log(buttonPlus2);
console.log(checkboxDeposit);
console.log(addNameInput);

