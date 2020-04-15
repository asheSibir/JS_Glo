'use strict';
class CarWash {
    constructor (brand, model = CarWash.noCarBaseModel(), services = []){
        this.brand = brand;
        this.model = model;
        this.washed = false;
        this._services = services;
    }
    static noCarBaseModel (){
        return 'неизвестно';
    }
    washReady () {
        this.washed = true;
        CarWash.counter++;
        this.report();
    }
    report () {
        console.log(this.brand, this.model, this.washed);
    }
    get services () {
        console.log(this._services);
        return this._services.length > 0 ? 'Есть доп услуги' : 'Нет доп услуг';
    }
    set services (addService) {
        return this._services.push(addService);
    }
}

class AnotherCarWash extends CarWash{
    constructor (brand, washed, pass){
        super(brand, washed);
        this.pass = pass;
    }
    washReady () {
        super.washReady();
        this.reportOffice();
    }
    reportOffice(){
        console.log('Машина помыта');
    }
};


CarWash.counter = 0; //статическое свойство

const car1 = new CarWash ('Mazda', '3', ['wash tires', 'wax']);
const car2 = new CarWash ('Toyota', 'Camry');
const car3 = new CarWash ('Mersedes');
const car4 = new AnotherCarWash('Honda', 'Civic');

car1.report();
car2.washReady();
car3.washReady();
car4.washReady();

console.log(CarWash.counter);
//car2.report();
console.log(car1.services);
console.log(car2.services);
car3.services = 'with a phone';
console.log(car3.services);