const playerInput = document.querySelector('.player-name-input');
const formButton  = document.querySelector('.send-player-btn');
const form        = document.querySelector('#memory_game_login');

const validatePlayer = ({target}) => {
    if (target.value.length >= 3) {
        formButton.removeAttribute('disabled');
        return;
    }

    formButton.setAttribute('disabled', '');
}

const onSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('player 1', playerInput.value);
    window.location = 'steps/party.html';
}

playerInput.addEventListener('input', validatePlayer);
form.addEventListener('submit', onSubmit);