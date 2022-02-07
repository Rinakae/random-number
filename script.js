'use strict';
const isNumber = function(n) {
  return (!isNaN(parseInt(n)) && isFinite(n));
};

function askNumber() {
  let randomNum = 15;
  let num = prompt("Угадай число от 1 до 100", 12);

  if (num === null) {
    alert("Игра окончена");
  } else if (!isNumber(num) && num !== null) {
    alert("Введите число!");
    askNumber();
  } else if (num > randomNum && num !== null) {
    alert("Загаданное число меньше");
    askNumber();
  } else if (num < randomNum && num !== null) {
    alert("Загаданное число больше");
    askNumber();
  } else if (num == randomNum && num !== null) {
    alert("Поздравляю, Вы угадали!");
  }
}

askNumber();