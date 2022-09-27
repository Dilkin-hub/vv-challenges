const playersInput  = document.querySelector('#players_qty');
const formButton    = document.querySelector('.send-player-btn');
const form          = document.querySelector('#memory_game_login');

const validatePlayer = ({target}) => {
    if (target.value > 0) {
        formButton.removeAttribute('disabled');
        return;
    }

    formButton.setAttribute('disabled', '');
}

const onSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('players', playersInput.value)
    window.location = 'steps/party.html';
}

playersInput.addEventListener('input', validatePlayer);
form.addEventListener('submit', onSubmit);