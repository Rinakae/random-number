'use strict';
const game = function() {

  let isNumber = function(n) {
    return (!isNaN(parseInt(n)) && isFinite(n));
  };

  let random = function() {
    return Math.floor(Math.random() * 101);
  };

  let randomNumber = random();

  function createCounter() {
    let counter = 10;
    let fCounter = function() {
      counter--;
      return counter;
    };
    return fCounter;
  }

  let countNum = createCounter();

  function askNumber() {
    let cNum = countNum();
    let userNumber = prompt("Угадай число от 1 до 100");
    console.dir(askNumber);

  if (cNum !== 0) {

    if (userNumber === null) {
      alert("Игра окончена");
    } else if (!isNumber(userNumber) && userNumber !== null) {
      alert("Введите число!");
      askNumber();
    } else if (userNumber > randomNumber && userNumber !== null) {
      alert(`Загаданное число меньше, осталось ${cNum} попыток`);
      askNumber();
    } else if (userNumber < randomNumber && userNumber !== null) {
      alert(`Загаданное число больше, осталось ${cNum} попыток`);
      askNumber();
    } else if (userNumber == randomNumber && userNumber !== null) {
      let playAgain = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
      if (playAgain !== true) {
        alert("Игра окончена"); 
      } else {
        game();
      }    
    } 
  
    } else if (cNum == 0) {
      let playAgain = confirm("Попытки закончились, хотите сыграть еще?");
      if (playAgain !== true) {
        alert("Игра окончена"); 
      } else {
        game();
      }
    } 
  cNum--;

}
askNumber();

};

game();