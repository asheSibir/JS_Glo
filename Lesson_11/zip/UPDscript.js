'use strict';
//ПЕРЕМЕННЫЕ
//БЛОК DATA
//МЕСЯЧНЫЙ ДОХОД
let salaryAmount = document.querySelector('.salary-amount');
// ДОПОЛНИТЕЛЬНЫЙ ДОХОД    
let incomeItems = document.querySelectorAll('.income-items'),
    incomeTitle = document.querySelector('.income-title'),
    incomeAmount = document.querySelector('.income-amount');
//Возможный доход
let additionalIncome = document.querySelectorAll('.additional_income'),
    additionalIncomeTitle = document.querySelectorAll('.additional_income-item')[0],
    additionalIncomeAmount = document.querySelectorAll('.additional_income-item')[1];
// Обязательные расходы
let expensesItems = document.querySelectorAll('.expenses-items'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesAmount = document.querySelector('.expenses-amount'); 
//Возможные расходы
let additionalExpenses = document.querySelector('.additional_expenses-item');
//Депозит
let depositCheck = document.getElementById('deposit-check');
//Цель
let targetAmount = document.querySelector('.target-amount');
//Период
let periodSelect = document.querySelector('.period-select'),
    periodAmount = document.querySelector('.period-amount');
//Кнопки
let btnPlus = document.getElementsByTagName('button'),
    incomePlus = btnPlus[0],
    expensesPlus = btnPlus[1];

//БЛОК РЕЗУЛЬТАТЫ
let budgetMonthValue = document.querySelector('.budget_month-value'), //Доход за месяц
    budgetDayValue = document.querySelector('.budget_day-value'), //Дневной бюджет
    expensesMonthValue = document.querySelector('.expenses_month-value'), //Расход за месяц
    addIncomeValue = document.querySelector('.additional_income-value'), //Возможные доходы
    addExpValue = document.querySelector('.additional_expenses-value'), //Возможные расходы
    incomePeriodValue = document.querySelector('.income_period-value'), //Накопления за период
    targetMonthValue = document.querySelector('.target_month-value'); //Срок достижения цели в месяцах

//Запуск/отмена
let start = document.getElementById('start'),
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
    start: function(){
        
        appData.budget = +salaryAmount.value; //месячный доход
        appData.getExpenses(); //расчет расходов        
        appData.getIncome();// расчет доходов
        appData.getExpensesMonth(); // выведение ежемесячных расходов
        appData.getExpensesMonth(); //расчет ежемесячных расходов (!!!)
        appData.getAddExpenses();//  выведение дополнительных расходов
        appData.getAddIncome();//  выведение дополнительных доходов
        appData.getBudget(); // расчет бюджета
        appData.calcPeriod(); // калькулирование бюджета
        appData.showResult(); // запуск расчета
     },
    showResult: function(){
        budgetMonthValue.value = appData.budgetMonth; //полю с результатами Доход за месяц присвоить значение budgetMonth
        budgetDayValue.value = Math.round(appData.budgetDay);//полю с результатами Дневной бюджет присвоить значение budgetDay
        expensesMonthValue.value = appData.getExpensesMonth(); //Расход за месяц = свойство expensesMonth
        addIncomeValue.value = appData.addIncome.join(', '); // Возможные доходы = строка из массива addIncome
        addExpValue.value = appData.addExpenses.join(', ');//Возможные доходы = строка из массива addExpenses
        periodSelect.addEventListener('change', appData.moveRange); // движение движка
        incomePeriodValue = countSavedMoney();
        targetMonthValue.value = Math.ceil(appData.getTargetMonth());//Срок достижения цели в месяцах = getTargetMonth
        incomeItems.value = appData.getIncome();
        incomePeriodValue.value = appData.calcPeriod(); //Срок достижения цели в месяцах = результат функции calcPeriod
    },
    addExpensesBlock: function(){ //добавление инпутов плюсиком (Обязательные расходы)
        
        let cloneexpensesItem = expensesItems[0].cloneNode(true); // создали клон
        expensesItems[0].parentNode.insertBefore(cloneexpensesItem, expensesPlus); // указали, куда его вставлять
        //УСЛОВИЕ ПРОПАДАНИЯ ПЛЮСИКА
        expensesItems = document.querySelectorAll('.expenses-items');
        if(expensesItems.length === 3){
            expensesPlus.style.display = 'none';  
        }
    }, 
    addIncomeBlock: function(){ // добавление инпутов плюсиком (ДОПОЛНИТЕЛЬНЫЙ ДОХОД)
        let cloneIncomeItems = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItems, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');
        if (incomeItems.length === 3){
            incomePlus.style.display = 'none';
        }

    },
    getExpenses: function(){ //Получение расходов. Запись в объект введенных значений
        expensesItems.forEach(function(item){ //для каждого блока данных
         let itemExpenses = item.querySelector('.expenses-title').value; //значение поля наименование
         let cashExpenses = item.querySelector('.expenses-amount').value; //значение поля сумма
            if(itemExpenses !== '' && cashExpenses !== ''){ //есть поля непустые
               appData.expenses[itemExpenses] = cashExpenses; // ключ - наименование, свойство - сумма
            }
        });
    },
    getIncome: function(){ //Получение доп доходов.
        additionalIncome.forEach(function(item){
            let itemAddIncomeTitle = additionalIncomeTitle.value;
            let itemAddIncomeAmount = additionalIncomeAmount.value;
             if(itemAddIncomeTitle !== '' && itemAddIncomeAmount !== ''){
                 appData.addIncome[itemAddIncomeTitle] = itemAddIncomeAmount;
             }
        });
    },
    getAddExpenses: function(){ //Возможные расходы (это 1 поле). Просто наводим красоту
        let addExpenses = additionalExpenses.value.split(','); //строку преобразуем в массив
        addExpenses.forEach(function(item){ //для каждого элемента массива
            item = item.trim();//убираем лишние пробелы
            if(item !== ''){//делает проверку на пустоту
                appData.addExpenses.push(item);//добавляем в конец массива 
            }
        });
    },
    getAddIncome: function(){ //получение Возможных доходов. Просто наводим красоту.
        let addIncome = additionalIncomeTitle.value.split(',');
        addIncome.forEach(function(item){
            item = item.trim();
            if (item !== ''){
                appData.addIncome.push(item);
            }
        });
    },
    getExpensesMonth: function () { //расчет расходов // TODO
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

    },
    moveRange: function(event){ //переключение RANGE
        console.log('it moves!'); 
        let count = 1;
        if (event){
            periodAmount.innerHTML = periodSelect.value;
        }
    },
    // countSavedMoney: function(){ // TODO ПОДУМАТЬ! ОШИБКА!
    //     return appData.budgetMonth - appData.getExpensesMonth();
    // },
    stopping: function(event){
        if (salaryAmount.value === ''){
            alert('Ошибка, поле "Месячный доход" должно быть заполнено!');
            return;
        } else {
            appData.start();
        }
    },


};
 
start.addEventListener('click', appData.stopping); //Запуск старта
expensesPlus.addEventListener('click', appData.addExpensesBlock); //Активация плюсиков
incomePlus.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('change', appData.moveRange); // движение движка



