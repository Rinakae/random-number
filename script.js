'use strict';
const isNumber = function(n) {
  return (!isNaN(parseInt(n)) && isFinite(n));
};
let randomNum = Math.floor(Math.random() * 101);
function askNumber() {
  
  let num = prompt("Угадай число от 1 до 100");

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
