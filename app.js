import * as Dictionary from "./words_alpha.js";
Dictionary.dictionary;

//function to find root word with arrow notation and "filter"
// function sixLetters(dictionary) {
//   let rootWords = dictionary.filter((x) => x.length() == 6);
// }

//first attempt at same function with forEach
function sixLetters(Dictionary) {
  const root = [];
  for (var i = 0; i < Dictionary.length + 1; i++) {
    //if (dictionary[i].length < 2 && dictionary[i].length < 7)
    if (Dictionary[i].substring(6) == null);
    root.push(Dictionary[i]);
  }
}

//function to randomly select a word from the array of 6 letter words
function randomWord(rootWords) {
  let wordNumber = Math.floor(Math.random() * rootWords.length()); // finding random place in array
  let mysteryWord = rootWords[wordNumber];
}

//function to find root word with arrow notation and "filter"
//function to randomly select a word from the array of 6 letter words

// function randomWord(rootWords) {
//   function sixLetters(dictionary) {
//     let rootWords = dictionary.filter((x) => x.length() == 6); //array with 6 letter words
//     let wordNumber = Math.floor(Math.random() * rootWords.length()); // finding random place in array
//     let mysteryWord = rootWords[wordNumber]; // finding word at that random place in array of 6 letter words
//     //console.log(rootWords['wordNumber']); //printing string at that random place
//   }
// }

//i want to add the letters of the mystery word to an array so they are more easily distinguisable
//function to loop through the mystery word and add each letter to an array the "old way"
function splitInletters(mysteryWord) {
  const letter = [];
  for (i = 0; i < 7; i++) {
    letter.push(substring(i));
  }
  return letter;
}

//functions to compute all possible words with "mysteryword"

// function allWords(letter); {
//     if (letter.length == 1) {  //check if letter array if empty
//         return letter;
//     }else {
//         let words = [];
// let starting = letter.splice(0); //starting letter in word, i want this to move its way down the array
// for (let i = 0; i < starting.length(); i++) //checking all words that start at [i] in the letter array
//     for(let j = i + 1; j < letter.length(); j++) //checking all the the other letters after
// let temp = (letter[0][j] + starting[i]);

// if(dictionary.includes(temp)) {
// return letter.map(temp);
// }else{
//     temp = next;
// }
//     }
// }

function allWords(letter) {
  let words = [];

  for (i = 0; i < letter.length(); i++)
    for (j = 0; j < letter.length(); j++)
      words.push(letter[0][j] + starting[i]);

  if (dictionary.includes(words[words.length() - 1])) {
    words.push(temp);
  } else {
  }
}
