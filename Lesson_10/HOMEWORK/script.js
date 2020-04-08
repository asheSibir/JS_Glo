'use strict';
let link = document.querySelectorAll('.book');
console.log(link);
link[0].before(link[1]);
link[0].after(link[4]);
link[4].after(link[3]);
link[3].after(link[5]);

// document.body.style.backgroundColor = 'blue';
document.body.style.backgroundImage = 'url(./image/adv.jpg)';

let title = document.querySelectorAll('h2');
let titleOfBook = title[2];
let linkOfBook = titleOfBook.querySelector('a');
linkOfBook.insertAdjacentText("beforeend",' (прототипы)');

let adv = document.querySelector('.adv');
adv.remove();

console.log(link[0]);
let liOfBookTwo = link[0].querySelectorAll('li');
console.log(liOfBookTwo);

liOfBookTwo[3].append(liOfBookTwo[6]);
liOfBookTwo[6].after(liOfBookTwo[8]);
liOfBookTwo[9].after(liOfBookTwo[2]);

let liOfBookFive = link[5].querySelectorAll('li');
console.log(liOfBookFive);
liOfBookFive[1].after(liOfBookFive[0]);
liOfBookFive[0].after(liOfBookFive[9]);
liOfBookFive[9].after(liOfBookFive[3]);
liOfBookFive[4].after(liOfBookFive[2]);
liOfBookFive[8].before(liOfBookFive[5]);

let liOfBookSix = link[2].querySelectorAll('li');
console.log(liOfBookSix);

let newArticle = liOfBookSix[8].cloneNode();
liOfBookSix[8].after(newArticle);
newArticle.insertAdjacentHTML('beforeend','<li>Глава 8: За пределами ES6” и поставить её в правильное место</li>');

//



