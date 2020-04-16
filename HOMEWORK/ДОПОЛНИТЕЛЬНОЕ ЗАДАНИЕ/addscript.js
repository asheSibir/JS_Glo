'use strict';
let start = document.getElementById('start'),
 salaryAmount = document.querySelector('.salary-amount'),
 budgetMonthValue = document.querySelector('.budget_month-value'),
 cancel = document.getElementById('cancel');

const keepData = () => budgetMonthValue.value = localStorage.data;
start.addEventListener('click',()=>{
    budgetMonthValue.value = salaryAmount.value;
    salaryAmount.value = '';
    salaryAmount.setAttribute('disabled', true);
    start.style.display = 'none';
    cancel.style.display = 'block';

});

start.addEventListener('click',()=>{
    localStorage.data = budgetMonthValue.value;
});
keepData();
cancel.addEventListener('click', ()=>{
    salaryAmount.value = '';
    budgetMonthValue.value = '';
    localStorage.clear();

})