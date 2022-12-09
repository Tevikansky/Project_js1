'use strict';

const y = 7;

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const getCheckPositive = function (num) {
  if (num > 100 || num <= 0) {
    return false;
  } else {
    return true;
  }
};

function random(x) {
  const n = x - 1;

  let a;
  getNumber();


  function getNumber() {
    a = prompt("Угадай число от 1 до 100");
    if (a === null) {
      theEnd();
    } else if (!isNumber(a) || !getCheckPositive(a)) {
      alert("Введите число от 1 до 100!");
      getNumber();
    } else {
      if (n !== 0) {
        if (a > y) {
          alert("Загаданное число меньше, осталось попыток: " + n);
          random(n);
        } else if (a < y) {
          alert("Загаданное число больше, осталось попыток: " + n);
          random(n);
        } else {
          let с = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
          if (с === true) {
            random(10);
          } else {
            theEnd();
          }
        }
      } else {
        theLostTries();
      }
    }
  }

  function theLostTries() {
    const с = confirm("Попытки закончились, хотите сыграть еще?");
    if (с === true) {
      random(10);
    } else {
      theEnd();
    }
  }
}

function theEnd() {
  alert("Игра окончена");
}
random(10);