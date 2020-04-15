'use strict';
function DomElement(selector, height, width, background, fontSize){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = background;
    this.fontSize = fontSize;

};
DomElement.prototype.createElement = function (item) {
    const letter = item.substring(0,1);
    console.log(letter);
    const sign = item.substring(0,1);
    
    if (sign === '.'){
        const tempDiv = document.createElement('div');
        const body = document.querySelector('body');
        body.insertAdjacentElement('afterbegin', tempDiv);
        tempDiv.classList.add(item.substring(1,item.length));
    } else {
        if (sign === '#'){
            const tempPar = document.createElement('p');
            const body = document.querySelector('body');
            body.insertAdjacentElement('afterbegin', tempPar);
            tempPar.setAttribute('id',item.substring(1,item.length));
        }
    }
};
DomElement.prototype.createStyle = function (item, color, height, background, fontSize) {
    item.cssText = `color: color;
    height: height; 
    background: bg;
    font-size: fontSize;
    `;   

};

const element = new DomElement('div', '100px', '60px', 'blue', '10em');
alert(element);
console.log(element);


element.createElement('#куку');
let temp = document.querySelector('p');
let className = 'btn';
temp.classList.add(className)
element.createStyle('className', 'red', '100px', 'blue', '10rem');
