'use strict';
const person = {
    name: 'Andrey',
    surname: 'Kukushkin',
    age: 43,
    get fullData() {
        return this.name + ' ' + this.surname + ', возраст: ' + this.age;
    },
    set (val) {
       this.age = val; 
    }
};
const date = new Date();
const year = date.getFullYear();
console.log(year);
person.age = year - 1976;
console.log(person);



const mazda = {
    model: 3,
    year: 2006,
    ownerName: 'John',
    ownerSurname: 'Smith'
};

mazda.owner = {};
mazda['color'] = 'red';
Object.defineProperty(mazda, 'countryOfOrigin', {
    value: 'Germany', // значение атрибута
    writable: true, //можно менять значение атрибута
    configurable: true, //можно менять сам атрибут, удалять и тп
    enumerable: false, // видеть свойство во время перебора цикла
});
mazda.countryOfOrigin = 'Japan';

Object.defineProperty(mazda, 'ownerData', {
    get: function () {
        return this.ownerName + ' ' + this.ownerSurname;
    },
    set: function (val) {
        this.ownerName = val;
    },    
});
mazda.ownerData = 'Jane';
console.log(mazda.ownerData);




for (let i in mazda){
    console.log(i);
}
console.log(mazda);