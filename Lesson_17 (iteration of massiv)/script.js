'use strict';
// fetch('./example_2.json')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.error(err));

const heroe1 = {name: 'Kate', male: 'f', age: '35'};
const heroe2 = {name: 'Tom', male: 'm', age: '21'};
const heroe3 = {name: 'Serg', male: 'm', age: '16'};
const heroe4 = {name: 'Lena', male: 'f', age: '8'};
const heroe5 = {name: 'Carl', male: 'm', age: '54'};

const heroes = new Set();
heroes.add(heroe1);
heroes.add(heroe2);
heroes.add(heroe3);
heroes.add(heroe4);
heroes.add(heroe5);

function practise(response){
    //const allHeroes = [];
    //response.forEach((item) => allHeroes.push(item.name));
    const allHeroes = response.map(function(item){item = item.name});
    //console.log(allHeroes);
}
practise(heroes);