'use strict';

let input = document.querySelector('input');
let inputValue = input.data();
console.log(inputValue);






let massive = [15,20,7,3,0,12,4];
function getNumber(){
    let d = massive.length;
    // let massInMass = [];

    for (let key in massive){
        
        for (let i = 0; i < d; i++){
            let updNum = massive[key];//переменная сверка
            let collect = [];
            for (let key = 1; key < d; key++){ // перебирает правые элементы
                if(updNum < massive[key]){
                    continue;
                } else {
                    collect.push(massive[key]); //добавляет меньшее в массив
                }
            }
            return collect.length;
        }   
        
    }
    
}  

console.log(getNumber());
'debugger';
let second = [1,9,80,62];
let m = second.length;
let newMass = [];
for (let timeOf = 0; timeOf < m; timeOf++){
    for (let key in second){
        for(key = 0; key < second.length; key++){
            // key += 1;
            second = second.splice(key, m); 
            console.log(second);  
        }
         
    }
    
}
