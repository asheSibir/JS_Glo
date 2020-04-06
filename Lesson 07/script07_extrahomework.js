'use strict';
//1) Создать массив week и записать в него дни недели в виде строк
// Вывести на экран все дни недели
//Каждый из них с новой строчки
// Выходные дни - курсивом
//Текущий день - жирным шрифтом(использовать объект даты)

let week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресеньe'];
console.log(week);




for (let day of week){
    let i = week.length;
    let now = new Date();
    let todayNum = now.getDay();

    console.log(day);
        if(day === week[todayNum]){
            console.log(week[todayNum].bold());
            }
        if (day === 'суббота' || day === 'воскресеньe'){
            console.log(day.italics());
        }         
    
}


//ВАРИАНТ 2

let week2 = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресеньe'];
week2.forEach(function(day){
    let now = new Date();
    let todayNum = function(){
        if (now.getDay() === 0) {
            return 6;
        } else {
            return now.getDay() - 1;
        }
    };
    if(day === week2[todayNum()]){
        console.log(week2[todayNum].bold());
        }
    if (day === 'суббота' || day === 'воскресеньe'){
        console.log(day.italics());
    }         
    console.log(week2[todayNum()]);
});





