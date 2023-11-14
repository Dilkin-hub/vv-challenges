const cryptographyInput = document.querySelector('.cryptography-text-field');
const cryptographyBtns = document.querySelectorAll('.cryptography-btn');
const encrypthBtn = document.querySelector('.encrypth');
const decrypthBtn = document.querySelector('.decrypth');

const validateInput = ({ target }) => {
  if (target.value) {
    encrypthBtn.classList?.remove('disabled');
    decrypthBtn.classList?.remove('disabled');

    return;
  }

  encrypthBtn.classList?.add('disabled');
  decrypthBtn.classList?.add('disabled');
}

const listenBtnEvent = ({ target }) => {
  const btn = target.parentNode;

  if (target.className.includes('encrypth')) {
    console.log('encrypth')
  } else {
    console.log('decrypth')
  }
}

cryptographyInput.addEventListener('input', validateInput);
encrypthBtn.addEventListener('click', listenBtnEvent)
decrypthBtn.addEventListener('click', listenBtnEvent)