'use strict';
const isNum = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};
let incomeBlock = document.querySelector('.income'),
    additionalBlock = document.querySelector('.additional_income'),
    result = document.querySelector('.result'),
    fixedExpenses = document.querySelector('.expenses'),
    addExpensesBlock = document.querySelector('.additional_expenses'),
    depositBlock = document.querySelector('.deposit-calc');

let start = document.getElementById('start');

let btnPlus = document.getElementsByTagName('button'),
    incomePlus = btnPlus[0],
    expensesPlus = btnPlus[1],
    depositCheck = document.querySelector('#deposit-check'),
    additionalIncome = document.querySelectorAll('.additional_income'),
    addIncomeItem = document.querySelectorAll('.additional_income-item');

let budgetMonthValue = result.querySelector('.budget_month-value'),
    budgetDayValue = result.querySelector('.budget_day-value'),
    expensesMonthValue = result.querySelector('.expenses_month-value'),
    addIncomeValue = result.querySelector('.additional_income-value'),
    addExpValue = result.querySelector('.additional_expenses-value'),
    incomePeriodValue = result.querySelector('.income_period-value'),
    targetMonthValue = result.querySelector('.target_month-value');

let salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    incomeAmount = document.querySelector('.income-amount'),
    incomeItem = document.querySelectorAll('.income-items'),

    expensesTitle = document.querySelector('.expenses-title'),
    expensesAmount = document.querySelector('.expenses-amount'),
    expensesItems = document.querySelectorAll('.expenses-items'),

    additionalExpensesItems = document.querySelector('.additional_expenses-item'),
    additionalExpenses = addExpensesBlock.querySelector('[placeholder="название"]'),//то же самое
    outcomeNameInput = fixedExpenses.querySelector('[placeholder="Наименование"]'),
    outcomeSumInput = fixedExpenses.querySelector('[placeholder="Сумма"]');

let sumOfDeposit = depositBlock.querySelector('.deposit-amount'),
    percentOfDeposit = depositBlock.querySelector('.deposit-percent'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select'),
    cancel = document.getElementById('cancel');

let appData = {
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    income: {}, 
    incomeMonth: 0,
    addIncome: [],
    expenses: [],
    addExpenses: [], 
    expensesMonth: 0,
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    //mission: 456578, 
    //period: 3,
    start: function(){

        if (salaryAmount.value === ' '){
            alert('Ошибка, поле "Месячный доход" должно быть заполнено!');
            return;
        }
        appData.budget = +salaryAmount.value;

        appData.getExpenses();       
        //appData.asking(); 
        appData.getIncome();
        appData.getExpensesMonth();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getBudget();
        appData.calcPeriod();
        appData.showResult();
    }, 
    showResult: function(){
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = appData.budgetDay;
        expensesMonthValue.value = appData.expensesMonth;
        addExpValue.value = appData.addExpenses.join(', ');//массив преобразуем снова в строку
        addIncomeValue.value = appData.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(appData.getTargetMonth());
        incomeItem.value = appData.getIncome();
        incomePeriodValue.value = appData.calcPeriod();
    },
    addExpensesBlock: function(){ //добавление инпутов плюсиком
        
        let cloneexpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneexpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        if(expensesItems.length === 3){
            expensesPlus.style.display = 'none';  
        }
    }, 
    addIncomeBlock: function(){
        let cloneaddExpItems = additionalExpensesItems[0].cloneNode(true);
        additionalExpensesItems[0].parentNode.insertBefore(cloneaddExpItems, incomePlus);
        additionalExpensesItems = document.querySelectorAll('.additional_income');
        if (additional_income.length === 3){
            incomePlus.style.display = 'none';
        }

    },

    getExpenses: function(){ //запись в объект введенных значений
        expensesItems.forEach(function(item){
         let itemExpenses = item.querySelector('.expenses-title').value;
         let cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses !== '' && cashExpenses !== ''){
               appData.expenses[itemExpenses] = cashExpenses;
            }
        });
    },
    getIncome: function(){
        additionalIncome.forEach(function(item){
            let itemAddIncomeTitle = item.querySelectorAll('.additional_income-item')[0].value;
            let itemAddIncomeAmount = item.querySelectorAll('.additional_income-item')[1].value;
             if(itemAddIncomeTitle !== '' && itemAddIncomeAmount !== ''){
                 appData.addIncome[itemAddIncomeTitle] = itemAddIncomeAmount;
             }
        });
    },
    getAddExpenses: function(){
        let addExpenses = additionalExpensesItem.value.split(','); //строку преобразуем в массив
        addExpenses.forEach(function(item){ //для каждого элемента массива
            item = item.trim();//убираем лишние пробелы
            if(item !== ''){//делает проверку на пустоту
                appData.addExpenses.push(item);//добавляем в конец массива 
            }
        });
    },
    getAddIncome: function(){
        addIncomeItem.forEach(function(item){
            let itemValue = item.value.trim();
            if (item !== ''){
                appData.addIncome.push(itemValue);
            }

        });
    },

    getExpensesMonth: function () {
        for (let i = 0; i < appData.expenses.length; i++) {
        appData.expensesMonth += +appData.expenses[i];
        }   
    },
   
    getBudget: function () {
        appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },

    getTargetMonth: function () {
        return targetAmount.value / appData.budgetMonth;
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
    calcPeriod: function (){
        return appData.budgetMonth * periodSelect.value;

    }
        //asking: function(){
        //let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        //appData.addExpenses = addExpenses.toLowerCase().split('. '); 
        //appData.deposit = confirm('Есть ли у вас депозит в банке?');
        // for (let i = 0; i < 3; i++) {

        //     let itemExpenses;
        //     do{
        //         itemExpenses = prompt('Введите обязательную статью расходов?','Жилье, питание, транспорт'); 
        //     } while (itemExpenses === '' || itemExpenses === null|| itemExpenses === 'Жилье, питание, транспорт');

        //     let cashExpenses;
        //     do{
        //       cashExpenses = prompt('Во сколько это обойдется?','');
        //     }
        //     while (cashExpenses === "" || cashExpenses === null || isNaN(cashExpenses));  
            
        //     appData.expenses.push(cashExpenses); 
        //   }
    //},
};
start.addEventListener('click', appData.start);
expensesPlus.addEventListener('click', appData.addExpensesBlock);





if (appData.getTargetMonth() > 0) {
    console.log('Цель будет достигнута за ' + Math.ceil(appData.getTargetMonth()) + 'месяцев');
} else {
    console.log('Цель не будет достигнута');
}

// for (let key in appData){
//     console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
// }
appData.getInfoDeposit();




