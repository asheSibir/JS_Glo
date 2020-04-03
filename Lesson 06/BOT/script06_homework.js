'use strict';
 
function gameNum(n){
    function bot(){
        let guess = 5;
        let value = prompt("Введите число", '');
        let firstSign = value.slice(0, 1);
        if (!value){
            alert('Увидимся в следующий раз!');
        } else {
            if(firstSign > 0 || firstSign < 0){
                if (parseFloat(value) > guess){
                    alert('Загаданное число меньше, попробуйте еще раз!', '');
                    gameNum();
                } else {
                    if (parseFloat(value) < guess){
                        alert('Загаданное число больше, попробуйте еще раз!', '');
                        gameNum();
                    } else {
                        function final(){
                            if(parseFloat(value) === guess){
                                return confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
                                } else {
                                    return gameNum();
                                }
                            }
                        final();
                    }
                }
                
            } else {
                alert('Введи число!');
                prompt('...');
            }
        }
        n--;
        console.log(n);
        bot();
    }
    
}
    

gameNum(10);
// — если пользователь ввел не число, то выводит сообщение "Введи число!" и предлагает ввести новый вариант;
// — если пользователь нажимает "Отмена", то игра заканчивается