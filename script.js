document.addEventListener("DOMContentLoaded", function () {
    const gameList = document.getElementById('gameList');

    
    const games = [
        { id: 1, name: 'Red Dead Redemption 2', rating: 0 },
        { id: 2, name: 'Cyberpunk 2077', rating: 0 },
        
    ];

    games.forEach(game => {
        const gameDiv = createGameElement(game);
        gameList.appendChild(gameDiv);
    });
});

function createGameElement(game) {
    const gameDiv = document.createElement('div');
    gameDiv.classList.add('game');
    gameDiv.id = `game${game.id}`;

    const heading = document.createElement('h2');
    heading.innerText = game.name;

    const coverImage = createCoverImage(game.id);

    const ratingParagraph = document.createElement('p');
    ratingParagraph.innerHTML = `Avaliação: <span id="rating${game.id}">${game.rating}</span>`;

    const plusButton = createButton('Avaliar +1', () => rateGame(game.id, 1));
    const minusButton = createButton('Avaliar -1', () => rateGame(game.id, -1));

    gameDiv.appendChild(heading);
    gameDiv.appendChild(coverImage);
    gameDiv.appendChild(ratingParagraph);
    gameDiv.appendChild(plusButton);
    gameDiv.appendChild(minusButton);

    return gameDiv;
}

function createButton(text, onClick) {
    const button = document.createElement('button');
    button.innerText = text;
    button.addEventListener('click', onClick);
    return button;
}

function rateGame(gameId, rating) {
    const ratingElement = document.getElementById(`rating${gameId}`);
    const currentRating = parseInt(ratingElement.innerText);
    ratingElement.innerText = currentRating + rating;
}

function createCoverImage(gameId) {
    const image = document.createElement('img');
    image.src = getRandomCoverImage();
    image.alt = `Capa do Jogo ${gameId}`;
    image.classList.add('cover-image');
    return image;
}

function getRandomCoverImage() {
    const coverImages = [
        'cover1.png',
        'cover2.png',
        
    ];

    return coverImages[Math.floor(Math.random() * coverImages.length)];
}
// comecei a fazer o site dia 12/11 pq sou procrastinadora e só consegui fazer isso consultando alguns sites e videos do alura, mim dê pelo menos um terço da nota ;<
