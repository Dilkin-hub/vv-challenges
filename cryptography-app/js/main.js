const cryptographyInput = document.querySelector('.cryptography-text-field');
const cryptographyBtns = document.querySelectorAll('.cryptography-btn');
const encrypthBtn = document.querySelector('.encrypth');
const decrypthBtn = document.querySelector('.decrypth');
const resultPanel = document.querySelector('.result-panel')

const normalAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const inverseAlphabet = "ZYXWVUTSRQPONMLKJIHGFEDCBA";

const validateInput = ({ target }) => {
  if (target.value) {
    encrypthBtn.classList?.remove('disabled');
    decrypthBtn.classList?.remove('disabled');

    return;
  }

  encrypthBtn.classList?.add('disabled');
  decrypthBtn.classList?.add('disabled');

  resultPanel.innerHTML = '';
  resultPanel.classList?.add('hidden');

}

const encrypth = () => {
  const text = cryptographyInput.value;

  const encryptedText = text
    .split('')
    .map(char => (normalAlphabet.includes(char) ? inverseAlphabet[normalAlphabet.indexOf(char)] : char))
    .join('');

  cryptographyInput.value = encryptedText;
};

const decrypth = () => {
  const encryptedText = cryptographyInput.value;

  const decryptedText = encryptedText
    .split('')
    .map(char => (inverseAlphabet.includes(char) ? normalAlphabet[inverseAlphabet.indexOf(char)] : char))
    .join('');

  cryptographyInput.value = decryptedText;
};

cryptographyInput.addEventListener('input', validateInput);
encrypthBtn.addEventListener('click', encrypth)
decrypthBtn.addEventListener('click', decrypth)