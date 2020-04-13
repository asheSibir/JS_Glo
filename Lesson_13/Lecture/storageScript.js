'use strict';
//localStorage - хранилище на конкретном компе
//sessionStorage - хранилище для конкретной сессии
//cookie (работают только с HTTP адресом!): document.cookie = 'имя=значение';

const inputText = document.getElementById('myText'),
    myBtn = document.getElementById('myBtn'),
    text = document.getElementById('text'),
    inputText2 = document.getElementById('myText2'),
    myBtn2 = document.getElementById('myBtn2'),
    pText = document.getElementById('text2');

//localStorage - объект

//Через присваивание
//Записываем в localStorage значение из input 
const showText = function (){
    text.textContent = decodeURI(localStorage.myText); //могло быть sessionStorage
};    
myBtn.addEventListener('click', function(){  //(*)
    localStorage.myText = encodeURI(inputText.value); //закодировали в UTF-8
    showText();
});
showText(); //вызвать функцию, чтобы значение сохранялось не только после нажатия кнопки (*)


// //Через метод setItem и getItem
// const showText2 = function (){
//     pText.textContent = localStorage.getItem('memory'); //могло быть sessionStorage
// };  

// myBtn2.addEventListener('click', function(){
//     localStorage.setItem('memory', inputText2.value); //Через метод, в скобках ключ и значение
//     showText2();
// });
// showText2();


// //Метод, удаляющий все данные

// localStorage.removeItem('myText') // в скобках - имя ключа
// //можно вручную удалить через Application. Как несколько, так и все

// //Cookie
// document.cookie = 'имя=значение';//без пробелов, имя=значение
// //если при создании нового cookie имя повторяется, то просто затирается предыдущее значение
// //живут одну сессию, то есть после закрытия окна, удаляются
// //чтобы сохранить надолго, надо писать так:
// document.cookie = 'имя=значение, expires=Tue, 7 May 2024 00:00:00 GMT';

// // function setCookie(cname, cvalue, exdays) {
// //     const d = new Date();
// //     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
// //     const expires = 'expires=' + d.toUTCString();
// //     document.cookie = cname + '=' + cvalue + ';' + expires;
// // }

// function setCookie(key, value, year, month, day, path , domain, secure) {
//     let cookieStr = key + '=' + value;
//     if (year){
//         const expires = new Date(year, month, day);
//         cookieStr += '; expires=' + expires.toGMTString;
//     }

// }
// //метод для кодировки в UTF-8
// let frog = "лягушка";
// let newText = encodeURI(frog)
// console.log(newText);
// let translate = decodeURI(newText);
// console.log(translate);