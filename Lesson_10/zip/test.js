'use sctrict';
const title = document.querySelectorAll('.title');
// const inputs = document.querySelectorAll('input');
// console.log(title);
// const titleClone = title[1].cloneNode(); // клонирование элемента (не ссылка, самостоятельный)
// const titleCloneFull = title[1].cloneNode(true); // клонирование элемента со всеми вложенностями, атрибутами и свойствами
// title[1].remove();//удаление элемента (доп доход)
// console.log(inputs);
// console.log(title[1]);
// inputs[0].append(title[1]); //переместить элемент в конец списка родителя
// inputs[1].prepend(title[2]); // переместить элемент в начало списка родителя
// title[6].before(title[0]); // переместить элемент до элемента Х: перед чем.before(что вставлять)
// title[6].after(title[0]); // переместить элемент после элемента Х: после чего.after(что вставлять)
// title[6].replaceWith(title[0]); //что заменяем.replaceWith(чем заменяем)
title[3].innerHTML = '<a href="http://htmlbook.ru/html/a">A-tag</a>';
let mainTitle = document.querySelector('h1');
console.log(mainTitle);
mainTitle.insertAdjacentText("beforeend",' (проработка)');

let childOrParent = document.querySelector('option').closest('select');
console.log(childOrParent);