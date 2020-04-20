'use strict';
//ПРОТОТИПЫ, КОНСТРУКТОРЫ

// function Car(){ //Базовое написание конструктора, С БОЛЬШОЙ БУКВЫ
//     this.model = 'Mazda'
// }

//Конструктор с меняемыми свойствами:
function Auto(countryOrigin, options){
    this.countryOrigin = countryOrigin;
    options = options || {};
    this.color = options.color;
    this.transmission = options.transmission;
}
Auto.prototype.ride = function(){
    console.log(this.brand + ' ' +this.model + ' ' + 'поехала!');
};

function Audi(countryOrigin, options, model, type){
    Auto.apply(this, arguments); //Привязываем этот класс к Auto 
    this.brand = 'Audi';
    this.model = model;
    this.type = type;
}
Audi.prototype = Object.create(Auto.prototype); //Еще одна привязка, чтобы объекты на основе Audi
//не только свойства Auto получали через Audi, но и считали Auto прототипом

Audi.prototype.constructor = Audi; //Втянули Audi внутрь его класса Auto

let carQ7 = new Audi('Germany', {color: 'red'}, 'Q7', 'S');
console.log(carQ7);

console.log(carQ7 instanceof Audi);
console.log(carQ7 instanceof Auto);

carQ7.ride();


function Car(brand, model, options){
    this.brand = brand;
    this.model = model;
    options = options || {};
    this.color = options.color;
    this.transmission = options.transmission;
}
let car = new Car('Mazda', '3', {color: 'red'});
let car2 = new Car('Toyota', 'Camry', {'ABS': true});
//console.log(car, car2); 

Car.prototype.ride = function(){
    console.log(this.brand + this.model + 'поехала!');
};

//car.ride();
//console.log(Car.prototype.isPrototypeOf(car));
//console.log(car2 instanceof Car);





let anotherCar = {
    model: 'Mazda',
};
console.log(anotherCar);
console.dir(Car);

Car.prototype.ride = function (){ //добавление в конструктор Car нового метода
    console.log('ехать');
}


// // let arr = [1, 3, 5, 15];
// // console.log(arr);
// // console.log(arr.__proto__);
// // console.log(Array.prototype);

// let car = {
//     doors: 4,
//     turbocharging: false,
//     ride: function(){
//         console.log('Машина едет');
//     }
// };

// let newCar = Object.create(car); //создание объекта с прототипом
// newCar.model = 'mazda3';
// console.log(newCar);

// console.log(newCar.hasOwnProperty('model')); //проверяет наличие свойства у самого объекта
// console.log(newCar.__proto__.hasOwnProperty('model'));//проверяет наличие свойства у прототипа

// console.log(car.isPrototypeOf(newCar)); //проверяет, является ли объект прототитом (объекта)