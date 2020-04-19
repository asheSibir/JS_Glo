'use strict';
const taskSec = function(x, y){
    let newNum = Math.pow(x, y);
    let newNumStr = newNum.toString();
    //console.log(newNum); - результат возведения в степень
    let length;
    for (let account = 1; newNum > 1; account++){
        newNum/= 10;
        length = account;
    }
    //console.log(length); - количество цифр в результате
    let newArr = []; //сборка массива из цифр
    for (let i = 0; i < length; i++){
        newArr.push(newNumStr.slice(i, i + 1));
    }
    //console.log(newArr); - получившийся массив
    let result = newArr.reduce((box, elem) => box/1 + elem/1);
    console.table(result);

};
taskSec(4, 8);