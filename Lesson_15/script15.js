'use strict';
//Шаблонные строки, обратные кавычки
//Интерполяция ${const}
//СТРЕЛОЧНЫЕ ФУНКЦИИ
const Human = function (firstname, surname, age){
    this.firstname = firstname;
    this.surname = surname;
    this.age = age;
};
Human.prototype.presentation = () => {
    return ' - слабая функция';
}
const newHuman = new Human('Вася', 'Иванов', '35');
console.log(newHuman);
console.log(newHuman.firstname + newHuman.presentation());



const travel = (person, origin, destination, time = '00:00') => {
        console.log(`${person} отправляется из ${origin} в ${destination}, время отправления - ${time}`);
};
travel('Алина', 'Юрово', 'Москва');
//СОКРАЩЕННАЯ ЗАПИСЬ ДЛЯ ПРОСТЫХ ФУНКЦИЙ
const travelback = (person, origin, destination, time = '00:00') =>(`${person} возвращается из ${destination} в ${origin}, время отправления - ${time}`); 
travel('Алина', 'Москва', 'домой');

//addEventListener и стрелочные функции
const btn = document.querySelector('button');
btn.addEventListener('click', (e) => {
    console.log(`Нажата кнопка! Причина - ${e.target}`);
});

const btns = document.querySelectorAll('button');
btns.forEach((e) => {
    console.log(e);
});

const createHome = function (wall, doors, windows = 1) {
    console.log(`Стены дома выполнены из ${wall}, количество дверей - ${doors}, количество окон - ${windows}`);
};
// windows = 1 - значение по умолчанию. Такие ставят в конце всех параметров, слева - обязательные
createHome('пеноблоки', '2', '23');


//Шаблонные строки, обратные кавычки
const str = 'Двойные \nкавычки\n';
const patternStr = `Обратные 
кавычки - 2`;
//console.log(str, patternStr);

//Интерполяция ${const}
const herName = 'Olga';
const age = 28;
const text = `<h1>${patternStr}</h1>
            <div>${herName}</div>
            <div>${age + 35}</div>`;
//console.log(text);


