'use strict';
 
const gameNum = function(n){
    let guess = n;
    let value = prompt("Введите число", '');
        
    function base(){
        if (parseFloat(value) > guess){
            alert('Загаданное число меньше, попробуйте еще раз!', '');
        } else {
            if (parseFloat(value) < guess){
                alert('Загаданное число больше, попробуйте еще раз!', '');
            } else {
                if(parseFloat(value) === guess){
                return alert('Вы угадали!');
                } else {
                    return base(n);
                }
            }
        }
    }

    let firstSign = value.slice(0, 1);
    if(firstSign > 0 || firstSign < 0){ //если число
    base();
        } else {
             alert('Введите число!');
        }        
};

gameNum(5);
console.dir(gameNum());

    




// — если пользователь ввел не число, то выводит сообщение "Введи число!" и предлагает ввести новый вариант;
// — если пользователь нажимает "Отмена", то игра заканчивается.