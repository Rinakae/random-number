'use strict';

let randomNum = Math.floor(Math.random() * 101);
let countNum;

const isNumber = function(n) {
  return (!isNaN(parseInt(n)) && isFinite(n));
};

function createCounter() {
  let counter = 10;
  let fCounter = function() {
    counter--;
    return counter;
  };
  return fCounter;
}

countNum = createCounter();

function askNumber() {
  let cNum = countNum();
  let num = prompt("Угадай число от 1 до 100");

  if (cNum !== 0) {

    if (num === null) {
      alert("Игра окончена");
    } else if (!isNumber(num) && num !== null) {
      alert("Введите число!");
      askNumber();
    } else if (num > randomNum && num !== null) {
      alert(`Загаданное число меньше, осталось ${cNum} попыток`);
      askNumber();
    } else if (num < randomNum && num !== null) {
      alert(`Загаданное число больше, осталось ${cNum} попыток`);
      askNumber();
    } else if (num == randomNum && num !== null) {
      let playAgain = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
      if (playAgain !== true) {
        alert("Игра окончена"); 
      } else {
        askNumber();
      }    
    } 
  
  } else {
    let playAgain = confirm("Попытки закончились, хотите сыграть еще?");
     if (playAgain !== true) {
        alert("Игра окончена"); 
    } else {
      askNumber();
    }
  } 
  cNum--;

}
askNumber();