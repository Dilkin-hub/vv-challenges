const tabletop    = document.querySelector('.tabletop');
const playersNum  = parseInt(localStorage.getItem('players'));
let currentPlayer = null;
const PLAYER = {
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

const loadPlayers = () => {
    for (let i = 0; i < playersNum; i++) {
        let playerIndex = i + 1;
        PLAYER.name = 'player-' + playerIndex;
    }
};

const loadGame = () => {
    loadPlayers();
    const copyCards = [...deck, ...deck];
    const shuffled  = copyCards.sort(() => Math.random() - 0.5);

    shuffled.forEach((item) => {
        const card = createCard(item);
        tabletop.appendChild(card);
    })
}

const createEl = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;

    return element;
}

let firstCard = '';
let secondCard = '';

const declareEnd = () => {
    const pairedCards = document.querySelectorAll('.paired-card');

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