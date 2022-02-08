'use strict';
const game = function() {

  let isNumber = function(n) {
    return (!isNaN(parseInt(n)) && isFinite(n));
  };

  let random = function() {
    return Math.floor(Math.random() * 101);
  };

  let randomNumber = random();

  function askNumber() {
    let userNumber = prompt("Угадай число от 1 до 100");
    console.dir(askNumber);

    if (userNumber === null) {
      alert("Игра окончена");
    } else if (!isNumber(userNumber) && userNumber !== null) {
      alert("Введите число!");
      askNumber();
    } else if (userNumber > randomNumber && userNumber !== null) {
      alert("Загаданное число меньше");
      askNumber();
    } else if (userNumber < randomNumber && userNumber !== null) {
      alert("Загаданное число больше");
      askNumber();
    } else if (userNumber == randomNumber && userNumber !== null) {
      alert("Поздравляю, Вы угадали!");
    }
  } 

askNumber();

};

game();