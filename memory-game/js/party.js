const tabletop     = document.querySelector('.tabletop');
const currentPlayerScreen = document.querySelector('.current-player-name');
const playersScore = document.querySelector('.players-score');
const playersNum   = parseInt(localStorage.getItem('players'));
let PLAYER = {
    name: '',
    matches: []
};
const deck = [
    'apple',
    'blueberry',
    'cherry',
    'grape',
    'strawberry'
];

let firstCard  = '';
let secondCard = '';
let players    = [];
let currentPlayer = {};

const getPlayer = (index) => {
    const playersList = getPlayers();

    return playersList[index];
}

const getPlayers = () => {
    for (let i = 0; i < playersNum; i++) {
        let playerIndex = i + 1;
        const playerName = 'Jogador ' + playerIndex;
        PLAYER = {
            index: i,
            name: playerName,
            matches: []
        };
        
        players[i] = PLAYER;
    }

    currentPlayer = players[0];

    return players;
};

const updateScore = (player) => {
    const scoreItem = createEl('div', 'score-item');
    const name      = createEl('div', 'name');
    const matches    = createEl('div', 'matches');

    scoreItem.appendChild(name);
    scoreItem.appendChild(matches);

    name.textContent = player.name;
    matches.textContent = player.matches.length;

    return scoreItem;
}

const loadGame = () => {
    const players   = getPlayers();
    const copyCards = [...deck, ...deck];
    const shuffled  = copyCards.sort(() => Math.random() - 0.5);
    
    currentPlayer = players[0];

    shuffled.forEach((item) => {
        const card = createCard(item);
        tabletop.appendChild(card);
    })

    players.forEach((item) => {
        const scoreItem = updateScore(item);
        playersScore.appendChild(scoreItem);
    })

    currentPlayerScreen.textContent = currentPlayer.name;
}

const createEl = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;

    return element;
}

const declareEnd = () => {
    const pairedCards = document.querySelectorAll('.paired-card')

    if (pairedCards.length === 10) {
        setTimeout(() => {
            alert('Parabéns, você encontrou todos os pares!');
        }, 400)
    }
}

const validateCards = () => {
    const firstValue = firstCard.getAttribute('data-value');
    const secondValue = secondCard.getAttribute('data-value');

    if (firstValue === secondValue) {
        firstCard.classList.add('paired-card');
        secondCard.classList.add('paired-card');

        firstCard = '';
        secondCard = '';

        declareEnd();
    } else {
        setTimeout(() => {
            firstCard.classList.remove('selected');
            secondCard.classList.remove('selected');

            firstCard = '';
            secondCard = '';

        }, 500)
    }

    updateCurrentPlayer();
}

const updateCurrentPlayer = () => {
    const players = getPlayers();

    for (var [i, player] of players.entries()) {
        if (i == currentPlayer.index) {
            i++;

            currentPlayer = players[i];
            break;
        } else {
            currentPlayer = players[0];
        }
    } 

    currentPlayerScreen.textContent = currentPlayer.name;

    return currentPlayer;
}

const revealCard = ({target}) => {
    const card = target.parentNode;

    if (card.className.includes('selected')) {
        return;
    }

    if (firstCard === '') {
        card.classList.add('selected');
        firstCard = card;
    } else if (secondCard === '') {
        card.classList.add('selected');
        secondCard = card;

        validateCards();
    } else {

    }

    card.classList.add('selected');
}

const createCard = (item) => {
    const card   = createEl('div', 'card');
    const front  = createEl('div', 'front');
    const back   = createEl('div', 'back');

    front.style.background = `url('../images/${item}.png') #e0ebfc`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-value', item)

    return card;
}

loadGame();