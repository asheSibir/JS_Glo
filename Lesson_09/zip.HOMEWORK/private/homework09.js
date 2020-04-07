'use strict';
let today = new Date();
console.log(today);

let weekDay = today.getDay();
let day = function(){
    // let weekDay = today.getDay();
    if (weekDay === 0) {
        return 'Воскресенье';
    } if (weekDay === 1){
        return 'Понедельник';
    } if (weekDay === 2){
        return 'Вторник';
    } if (weekDay === 3){
        return 'Среда';
    } if (weekDay === 4){
        return 'Четверг';
    } if (weekDay === 5){
        return 'Пятница';
    } if (weekDay === 6){
        return 'Суббота';
    } 
};
let dayOfWeek = day();

let monthNum = '0' + today.getMonth().toString();
let month = function(){
    let i = today.getMonth();
    let year = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
    return year[i];
};
let monthOf = month();   

let year = today.getFullYear();
let date = today.getDate();
let dateNum = function(){
    if (date < 10){
        return '0'+date.toString();
    } else {
        return date;
    }
};
let dateOfToday = dateNum();
let timeHours = today.getHours();
let timeMin = today.getMinutes();
let timeSec = today.getSeconds();

let hoursName = function(){
    if (timeHours === 21 || timeHours === 1){
        return 'час';
    } else {
        if (timeHours === 2 || timeHours === 3 || timeHours === 4 || timeHours === 22 || timeHours === 23){
        return 'часа';
        } else {
            return 'часов';
        }
    }
}
    

// a) 'Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды' 
 
console.log('Сегодня '+ dayOfWeek + ', ' + dateOfToday + ' '+ monthOf + ' ' + year + ', ' + timeHours + ' ' + hoursName() + ' ' + timeMin + ' мин. ' + timeSec + ' сек.');

//б) '04.02.2020 - 21:05:33' 
console.log(dateNum() + '.' + monthNum + '.' + year + ' - ' + timeHours + ':' + timeMin + ':' + timeSec);
