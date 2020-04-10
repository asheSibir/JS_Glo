'use strict';
//console.log(this);
let obj = {
    a: 1,
    b: 5
}
function callObj (){
    console.log('this: ', this);
}
callObj.apply(obj);
callObj.call(obj);


// let obj = {
//     a: 1,
//     b: 5,
//     c: function(){
//         console.log(this);
//     }
// };
// let foo = function(n){
//     n = 3;
//     console.log(this);
// };

// obj.c();
// foo();


// СТЕК ВЫЗОВОВ. ВЗАИМОДЕЙСТВИЕ РАБОТЫ ФУНКЦИЙ, ПОСЛЕДОВАТЕЛЬНОСТЬ ИХ ВЫЗОВА 
//  function one(){
//      console.log('one');
//      two();
//  }

//  function two(){
//      console.log('two');
//      three();
//  }

//  function three(){
//      console.log('three');
//  }

//  one();