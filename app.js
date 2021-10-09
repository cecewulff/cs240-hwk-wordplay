//function to find root word with arrow notation and "filter"
function sixLetters(dictionary) {
  let rootWords = dictionary.filter((x) => x.length() == 6);
}
//function to randomly select a word from the array of 6 letter words
function randomWord(rootWords) {
  let wordNumber = Math.floor(Math.random() * rootWords.length()); // finding random place in array
  let mysteryWord = rootWords[wordNumber];
}

//function to find root word with arrow notation and "filter"
//function to randomly select a word from the array of 6 letter words

function randomWord(rootWords) {
  function sixLetters(dictionary) {
    let rootWords = dictionary.filter((x) => x.length() == 6); //array with 6 letter words
    let wordNumber = Math.floor(Math.random() * rootWords.length()); // finding random place in array
    let mysteryWord = rootWords[wordNumber]; // finding word at that random place in array of 6 letter words
    //console.log(rootWords['wordNumber']); //printing string at that random place
  }
}

//i want to add the letters of the mystery word to an array so they are more easily distinguisable
//function to loop through the mystery word and add each letter to an array the "old way"
function splitInletters(mysteryWord) {
  const letter = [];
  for (i = 0; i < 7; i++) {
    letter.push(substring(i));
  }
  return letter;
}

//first attempt at same function with forEach
//function sixLetters(dictionary) {
//let root = [];
//dictionary.forEach((x) => {
//if (x.length() == 6) root.push(x);
//});
//return root();


//functions to compute all possible words with "mysteryword"
//function for two letter words
function allWords(letter); {
if (letter.length == 0) {
    return letter[0];
}
    let words = [];
if
if()


}