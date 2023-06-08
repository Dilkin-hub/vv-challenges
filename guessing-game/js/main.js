const generateNumberBtn = document.querySelector('.generate-number-btn');
const welcomeStepPanel = document.querySelector('.welcome-step-panel');
const guessingStepPanel = document.querySelector('.guessing-step-panel');
const guessNumberBtn = document.querySelector('.guess-number-btn');
const attemptNum = document.querySelector('.attempt-num');
const guessNumberInput = document.querySelector('.guess-number-input');
const difficultySelect = document.querySelector('.select-guessing-difficulty');

let ATTEMPTS = 0;
let MAXATTEMPTS = 3;
let MAXNUMBER = 15;

const generateSecretNumber = () => {
  let randNum = Math.floor((Math.random() * MAXNUMBER) + 1);

  localStorage.setItem('guessNum', randNum)
  welcomeStepPanel.classList.add('hidden');
  guessingStepPanel.classList.remove('hidden');
}
generateNumberBtn.addEventListener('click', generateSecretNumber);

const tryToGuessSecretNumber = () => {
  const secretNumber = localStorage.getItem('guessNum');
  let guessedNumber = document.getElementById('guessedNumber').value;

  if (!guessedNumber || guessedNumber <= 0) {
    alert('Não está esquecendo de algo? Verifique se o campo de número possui um valor válido.');
    return;
  }

  ATTEMPTS++;

  let attemptsCalc = MAXATTEMPTS - ATTEMPTS;


  if (attemptsCalc < 0) {
    alert('Putz! Parece que suas tentativas esgotaram. Recarregue a página para tentar novamente');
    return;
  }

  attemptNum.innerHTML = attemptsCalc;

  verifyGuessedNumber();
}
guessNumberBtn.addEventListener('click', tryToGuessSecretNumber);

const verifyGuessedNumber = (guessedNumber, secretNumber) => {
  if (guessedNumber < secretNumber) {
    alert('Quase! O valor inserido é menor que o valor gerado.');
  } else if (guessedNumber > secretNumber) {
    alert('Quase! O valor inserido é maior que o valor gerado.');
  } else if (guessedNumber === secretNumber) {
    alert('Uhuull! Você acertou o número gerado! Parabéns :)');

    location.reload();
  }
}

const updateDifficultyInfo = () => {
  const difficultyTextWrap = document.querySelector('.difficulty-info-text');
  const difficulty = difficultySelect.value;
  const dataInfo = difficultySelect.options[difficultySelect.selectedIndex].getAttribute('data-info');

  if (!difficulty || difficulty == '') {
    difficultyTextWrap.classList.add('hidden');
  } else {
    difficultyTextWrap.classList.remove('hidden');
    difficultyTextWrap.innerText = dataInfo;
  }

  console.log(dataInfo);

  setDifficultyLevel(difficulty);
}
difficultySelect.addEventListener('change', updateDifficultyInfo);

const setDifficultyLevel = (difficulty) => {
  if (difficulty === 'easy') {
    MAXATTEMPTS = 3;
    MAXNUMBER = 15;
  } else if (difficulty === 'medium') {
    MAXATTEMPTS = 5;
    MAXNUMBER = 30;
  } else if (difficulty === 'hard') {
    MAXATTEMPTS = 10;
    MAXNUMBER = 100;
  } else {
    MAXATTEMPTS = 3;
    MAXNUMBER = 15;
  }

  attemptNum.innerHTML = MAXATTEMPTS;

  guessNumberInput.setAttribute('max', MAXNUMBER)
}