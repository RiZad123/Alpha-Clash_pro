// Methor -- 2

function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}




// Genarate Rendon Alphabet function

function getARandomAlphabet(){
    const alphabetString  = 'abcdefghijklmnopqrstuvwxyz/';
    const alphabets = alphabetString.split('');


    const randomNumber = Math.random() * 26;
    const index = Math.round(randomNumber);


    const alphabet = alphabets[index];
    console.log(index, alphabet);
    return alphabet

}