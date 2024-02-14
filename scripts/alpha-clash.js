                     // Methor -- 1

// function play(){
    
//     const homeSection = document.getElementById( "home-screen");
//     homeSection.classList.add('hidden');

//     const playgroundSection = document.getElementById('play-ground')
//     playgroundSection.classList.remove('hidden');
// }


function continueGame(){
      const alphabet = getARandomAlphabet();
      console.log('Your rendom Alphabet', alphabet);

      const currentAlphabetElement = document.getElementById('currentAlphabet');
      currentAlphabetElement.innerText = alphabet;
}



// Methor -- 2

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}






