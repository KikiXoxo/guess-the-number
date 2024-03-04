'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = message => (document.querySelector('.message').textContent = message);
const displayScore = score => (document.querySelector('.score').textContent = score);

const changeColorText1 = color => (document.querySelector(color).style.color = '#924cb3');
const changeColorText2 = color => (document.querySelector(color).style.color = '#12011a');

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // No guess
  if (!guess) {
    displayMessage('No number!');
    //Right guess
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🏆 Winner winner chicken dinner!');
    document.querySelector('.number').style.width = '20rem';
    document.querySelector('body').style.background = '#924cb3';
    changeColorText1('.number');
    changeColorText1('.check');
    changeColorText1('.again');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // Wrong guess within range
  } else if (guess !== secretNumber && guess >= 1 && guess <= 20) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💣 You lose! The number was...');
      document.querySelector('.number').textContent = secretNumber;
      score = 0;
      displayScore(score);
    }
    // Out of range
  } else {
    displayMessage('Choose between 1 and 20!');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  changeColorText2('.number');
  changeColorText2('.check');
  changeColorText2('.again');
  displayScore(score);

  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '10rem';
  document.querySelector('body').style.background = '#12011a';
});

console.log(secretNumber);
