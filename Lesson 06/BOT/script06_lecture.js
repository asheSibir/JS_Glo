'use strict';
// Вложенность
let y = 10;

function one(){
    function two(){
        console.log(y);
    }
    two();
}
one();

//Видимость
// 1. Сначала ищет значение внутри функций, являющихся lexical enviroment;
// 2. Потом lexical enviroment;
// 3. Затем scope (lexical enviroment материнской функции);
// 4. global scope (lexical enviroment всего скрипта);

//ЗАМЫКАНИЕ

let a = 50;
 function one(){
     let x = 10;
     function two(y){
        function three(){
            let y = 5;
            return x * y;
        }
        return x + y + three;
     }
     console.dir(two);
     return two(15);
 }

 function funcMath(a) {
     return function(b) {
         console.log(a * b);
     };
 }
 const mathPow = funcMath(6);
 mathPow(5);