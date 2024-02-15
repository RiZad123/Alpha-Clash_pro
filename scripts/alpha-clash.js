// Methor -- 1

// function play(){

//     const homeSection = document.getElementById( "home-screen");
//     homeSection.classList.add('hidden');

//     const playgroundSection = document.getElementById('play-ground')
//     playgroundSection.classList.remove('hidden');
// }


function buttonPress(event) {

    const playerPressed = event.key
    console.log('Player Pressed', event.key);


    if(playerPressed === 'Escape'){
        gameOver();
    }


    const currentAlphabetElement = document.getElementById('current-alphabet');
    const current_alphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = current_alphabet.toLocaleLowerCase();
    console.log(playerPressed, expectedAlphabet);


    if (playerPressed === expectedAlphabet) {
        console.log('you get a point');

        // update a Score

        //  step--1  get the current  Score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText)
        console.log(currentScore);

        // step--2   increase the score
        const newScore = currentScore + 1;

        //    step--3 show the new score on screen
        currentScoreElement.innerText = newScore;

        console.log('you have pressed correctly', expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();

    } else {
        console.log('you missed. and lost a life');

        const currentLifeElement = document.getElementById("current-life");
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText)

        const newLife = currentLife - 1;

        currentLifeElement.innerText = newLife;

        if (newLife === 0) {
            console.log('Game Over');
            gameOver();
        }
    }
}


document.addEventListener('keyup', buttonPress)




function continueGame() {
    const alphabet = getARandomAlphabet();
    //   console.log('Your rendom Alphabet', alphabet);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet);
}




// Methor -- 2

function play() {
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('play-ground');

    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame()
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');

    // update final score
    const lastScore = getTextElementValueById('current-score')
    // console.log(lastScore);
    setTextElementValueById('last-Score', lastScore);
    
    const currentAlphabet = getElementTextById('current-alphabet');
    
    removeBackgroundColorById(currentAlphabet);
}







