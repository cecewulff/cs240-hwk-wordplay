//function to find root word with arrow notation and "filter"
// function sixLetters(dictionary) {
//   let rootWords = dictionary.filter((x) => x.length() == 6);
// }

//first attempt at same function : ORIGINAL
// function sixLetters(dictionary) {
//   const root = [];
//   for (let i = 0; i < dictionary.length + 1; i++) {
//     if (dictionary[i].substring(6) == null);
//     root.push(dictionary[i]);
//   }
// }
//   //randomly selecting a word from all the 6 letter words
//   function selectedWord(root){
//     return root[Math.floor(Math.random() * root.length())]
// }

// function splitInletters(mysteryWord); {
//     const letter = [];
//     for (i = 0; i < 7; i++) {
//       letter.push(mysteryWord.substring(i));
//     }
//     return letter; 
// }


//first attempt at function to find 6 letter word

function splitInletters(FINALword) { //this function splits the scrambled words into its characters and puts them into an array to make making combinations using the same letters easier. 
    const letter = [];
        for (i = 0; i < 7; i++) {
      letter.push(FINALword.substring(i));
    }
    return letter; 
}

function sixLetters(dictionary) { //this function searches the dictionary for 6 letter long words
    const root = [];
    for (let i = 0; i < dictionary.length + 1; i++) {
      if (dictionary[i].substring(6) == null);
      root.push(dictionary[i]);
    }
    return root;
  } 
  
function selectedWord(root) { //this function randomly chooses a word from the new array of 6 letter words. 
    const FINALword = root[Math.floor(Math.random() * root.length())]
    return FINALword;
  }
  

//function to randomly select a word from the array of 6 letter words


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

//these functions create all permutations possible with the given letters using the array of letters
function wordComb(letter) {
  const words = [];
  let temp = " "; //temps used to hold permutations of words already created to make it easier to create longer words
  let temp2 = " ";  
  
    for (let k = 0; k < letter.length() + 1; k++) //looping through the array for the first time to add possible single letter words
        if(!words.includes(letter[k])) { //to avoid duplicates
            words.push(letter[k]);  //adding if not already there
            temp =letter[k]; //adding letters to temp to make two letter long words easier
        }
        
if (!letter.length() == 0) {  //this is to try and make sure the loops run all the way through
    for (let i = 0; i < letter.length() + 1; i++) //loop to add words with more than one letter
    temp = temp + letter[i]; //temp now holds two letters
    temp2 = temp; // duplicating temp to make longer combinations of words later because i want to keep the two letter long combination that was just created
    words.push(temp); // pushing the two letter combinations

    for (let j = 0; j < letter.length() + 1; j++) //loop to create the other longer words
    temp = temp + letter[j]; //temp now holds three letters
    words.push(temp); //pushing 3 letter words
    temp = temp + letter[k]; //creating 4 letter words
    temp2 = temp2 + temp; //creating 5 letter words
    words.push(temp); //pushing four letter words
    words.push(temp2); //pushing 5 letter words

realWords(words); { //this function filters out words that are not in the dictionary
    for(let m = 0; m < words.length() + 1; m++) {
        if(!dictionary.includes(words[m])){
            words.pop(words[m]); //removing any words that are not in the dictionary
        }else{
            return words;
        }

    }
    
}
   

let input = prompt("Start Guessing!"); //prompt for start of game

//original method for findind inputted word in list
// function Correct(input) {
//   for (let i = 0; i < words.length + 1; i++)
//     if (words[i] == input) {
//       alert(`Correct! ${input}`);
//     } else {
//       alert(`${input} is not a word!`);
//     }
// }

//second method for findind inputted word in list using forEach
function searchWords() {
  const GuessedWords = [];
    words.forEach((function(words)) => {
        if (words[i] !== input) {
      alert(`Correct! ${input}`);
      GuessedWords.push(input);
      console.clear();
    } else {
      alert(`${input} is not a word!`);
      console.clear();
    }
  });
}



