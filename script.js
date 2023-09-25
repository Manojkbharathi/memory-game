const gameBoard = document.getElementById('gameBoard');

let icons = [
  'instagram',
  'whatsapp',
  'facebook',
  'twitter',
  'linkedin',
  'youtube',
];

let flippedCards = [];
icons.push(...icons);
// It randomly rearranges the elements in the array, effectively shuffling the cards for each new game.
function shuffleCards() {
  for (let i = icons.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    let temp = icons[i];
    icons[i] = icons[j];
    icons[j] = temp;
  }
}

function displayCards() {
  icons.forEach((curr, index) => {
    let card = document.createElement('div');
    card.setAttribute('id', index);
    card.innerHTML = `<div class ='card-back'>Click</div>`;
    card.classList.add('card');
    gameBoard.appendChild(card);

    card.addEventListener('click', function () {
      flipCard.call(this);
    });
  });
}

function flipCard() {
  if (flippedCards.length < 2 && !this.classList.contains('active')) {
    let cardId = this.getAttribute('id');
    let icon = icons[cardId];

    if (!flippedCards.includes(this)) {
      flippedCards.push(this);
      this.classList.remove('card-back');
      this.classList.add('active');
      this.innerHTML = `<div class ='front'> <i class='fab fa-${icon}'></i></div>`;

      if (flippedCards.length === 2) {
        setTimeout(matchCard, 800);
      }
    }
  }
}
function matchCard() {
  const cardOne = flippedCards[0];
  const cardTwo = flippedCards[1];

  if (icons[cardOne.getAttribute('id')] === icons[cardTwo.getAttribute('id')]) {
    cardOne.classList.add('front');
    cardTwo.classList.add('front');
  } else {
    cardOne.innerHTML = `<div class ='card-back'>Click</div>`;
    cardOne.classList.add('card');
    cardOne.classList.remove('active');

    cardTwo.innerHTML = `<div class ='card-back'>Click</div>`;
    cardTwo.classList.add('card');
    cardTwo.classList.remove('active');
  }

  flippedCards = [];
}

shuffleCards();
displayCards();
