'use strict';
const buttonSum = document.getElementById('sum'),
    buttonMult = document.getElementById('mult'),
    amountA = document.getElementById('a'),
    amountB = document.getElementById('b'),
    result = document.getElementById('res');

    const calculator = {
        arg1: 0,
        arg2: 0,
        result: 0,

        sum: function(){
            calculator.arg1 = amountA.value;
            calculator.arg2 = amountB.value;
            result.value = (calculator.arg1 / 1) + (calculator.arg2 * 1);
        },
        mult: function(){
            calculator.arg1 = amountA.value;
            calculator.arg2 = amountB.value;
            result.value = (calculator.arg1 / 1) * (calculator.arg2 * 1);
        },
        show: function(){
          // ваш код
        }
      };

      buttonSum.addEventListener('click', calculator.sum);
      buttonMult.addEventListener('click', calculator.mult);




// let arg1 = document.getElementById('a'),
//     arg2 = document.getElementById('b'),
//     buttonSum = document.getElementById('sum'),
//     buttonMult = document.getElementById('mult'),
//     result = document.getElementById('res');

// const sumOf =()=>{
//     result.value = (arg1.value/1 + arg2.value/1);
// }
// const mult = function (a, b){
//     result.value = (arg1.value/1 * arg2.value/1);
// }
// buttonSum.addEventListener('click', sumOf);
// buttonMult.addEventListener('click', mult);