'use strict';
let obj1 = {};
let obj2 = {};

console.log('obj: ', obj1); //выводит сам объект
console.log('obj2: ' + obj2); //выводит 'str:' [object Object] 

const obj3 = Object.create(null);
//ЭТО ЕДИНСТВЕННЫЙ СПОСОБ СОЗДАТЬ ПУСТОЙ ОБЪЕКТ!!! Иначе есть proto (объект = наследство от родительских объектов)
console.log('obj: ', obj3);

obj1.a = 1;
obj1.b = 2;
obj1.c = 'Привет';

console.log(obj1);

//Функция добавления свойства
function foo(n) {
 n.new = true;
 return n;
}
foo(obj1);

console.log(foo(obj1));

let expenses = {};
for (let i = 0; i < 5; i++){
    let str = 'Привет' + i;


    expenses[str] = +i;
}

//CALLBACK (cb)
let bar = function (data, cb){
    if (typeof(data) === 'number') {
        cb(data, 'type number');
    } else {
        cb(data, 'type not number');
    }
};
bar(123, function(dt, str){
    console.log(str, dt);
});

const foo1 = function clos(a){
    const b = 'второй замкнут';
    return function call(c){ //return тут очень важен
        console.log(a, b, c);
    };
    
};

const bar1 = foo1('Первый замкнут') ;
bar1('третий не замкнут');

console.dir(bar1);

//CHAINING
const foo2 = function(a) {
    return function(b) {
        return function(c){
            return a + b - c;
        };
    };
};

const foo3 = foo2(1);
console.log(foo3); //знает только глубоко внутреннюю а, равную 1. 1 + b + c, не знает, что выдавать, отдает все.
const foo4 = foo3(2);
console.dir(foo4); //та же проблема, что выше: 1 + 2 + c. Вероятно, user не хотел результат.
const foo5 = foo4(3);
console.dir(foo5); //появилась возможность посчитать.
console.log('foo5', foo5);

const result = foo2(3)(2)(13); // - 8; короткая запись для вывода РЕЗУЛЬТАТА. В скабках указаны значения всех переменных.
console.log(result);


const foo10 = function() { //
    const arr = [];
    return function(a) {
        arr.push(a);
        console.log(arr);
    }
};
const foo11 = foo10();
const foo12 = foo10();

foo11(2);
foo11(5);
foo11(10);
foo12({a: 1, b: 2});

// Кэширование cache-js

const addCache = function() {
    const cache = {};
    return function(key) {
        if(cache[key]) { //если новое значение в () = одному из cache[key]
            console.log(key + ' уже есть в кеше');
        } else {
            cache[key] = 'val: ' + key;
            console.log(cache);
        }
    }
}; 
const foo20 = addCache();
foo20(20);
foo20(21);
foo20(25);
foo20(20);

// ЛОГИРОВАНИЕ (ПОЧИТАЙ ПРО
const logger = function(fn) {
    return function() {
        const arg = Array.from(arguments); //ПОЧИТАЙ ПРО arguments!!!
        const res = fn.apply(null, arg); //ПОЧИТАЙ ПРО APPLY!!!
        console.log('Вызов функции: ' + fn.name + '(' + arg +')\n' + 'Результат вызова: ' + res);
        return res;
    }
};

const sum = function(a, b, c){
    return a + b + c;
}

const logSum = logger(sum);
const resultFin = (logSum(1, 5, 9));

console.log(resultFin);

//forEach
[1, 2, 6, 9].forEach(function(item){
    console.log(item);
});

