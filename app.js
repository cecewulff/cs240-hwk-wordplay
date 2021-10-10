//while loop that controls if game is still happening by if the number of found words is the same as all possible ones
while (words.length() !== found.length()) {
  console.log(unguessed);
  console.log(found);
}

//message if the game is beat, game is beat if number of found words matches the number of possible ones
if (words.length() == found.length()) {
  console.log(
    `Congradulations! You beat the game! You sucessfully guessed all ${words.length()} words, impressive!`
  );
  console.log(found);
}

//function to end the game even if all words aren't found
function endGame() {
  if (nextGuess() == null) {
    console.log(`Game ended, thanks for playing!`);
  }
}

//function to scramble the word for intial display and if the player requests
function scramble() {
  let scrambledword = FINALword.split("");
  scrambledword.sort(function () {
    return Math.random() - 0.5;
  });
  scrambledword = FINALword.join("");
  return scrambledword;
}

console.log(scrambledword);

//this function splits the scrambled words into its characters and puts them into an array to make making combinations using the same letters easier.
function splitInletters(FINALword) {
  const letter = FINALword.split("");
  return letter;

  function selectedWord(root) {
    //this function randomly chooses a word from the new array of 6 letter words.
    const FINALword = root[Math.floor(Math.random() * root.length())];
    return FINALword;
  }
  function sixLetters(dictionary) {
    //this function searches the dictionary for 6 letter long words
    const root = [];
    for (let i = 0; i < dictionary.length + 1; i++) {
      if (dictionary[i].substring(6) == null);
      root.push(dictionary[i]);
    }
    return root;
  }
}

//these functions create all permutations possible with the given letters using the array of letters, real words will be sorted out later.
function wordComb(letter) {
  const words = []; //array to hold all possible word combinations
  let temp = " "; //temps used to hold permutations of words already created to make it easier to create longer words
  let temp2 = " ";

  for (
    let k = 0;
    k < letter.length() + 1;
    k++ //looping through the array for the first time to add possible single letter words
  )
    if (!words.includes(letter[k])) {
      //to avoid duplicates
      words.push(letter[k]); //adding if not already there
      temp = letter[k]; //adding letters to temp to make two letter long words easier
    }

  if (!letter.length() == 0) {
    //this is to try and make sure the loops run all the way through
    for (
      let i = 0;
      i < letter.length() + 1;
      i++ //loop to add words with more than one letter
    )
      temp = temp + letter[i]; //temp now holds two letters
    temp2 = temp; // duplicating temp to make longer combinations of words later because i want to keep the two letter long combination that was just created
    words.push(temp); // pushing the two letter combinations

    for (
      let j = 0;
      j < letter.length() + 1;
      j++ //loop to create the other longer words
    )
      temp = temp + letter[j]; //temp now holds three letters
    words.push(temp); //pushing 3 letter words
    temp = temp + letter[k]; //creating 4 letter words
    temp2 = temp2 + temp; //creating 5 letter words
    words.push(temp); //pushing four letter words
    words.push(temp2); //pushing 5 letter words
  }

  //this function filters out words that are not in the dictionary
  realWords(words);
  for (let m = 0; m < words.length() + 1; m++) {
    if (!dictionary.includes(words[m])) {
      words.pop(words[m]); //removing any words that are not in the dictionary
    } else {
      return words;
    }
  }
}

let input = prompt("Start Guessing!"); //prompt for start of game
let nextGuess = prompt(`Enter a guess;`); //prompts for all guesses after

//original method for finding inputted word in list
function valid() {
  const found = []; //to track what has been found
  const unguessed = words.splice(0, words.length()); //copy of array with all possible words, used to track how many haven't been found and to help with displaying
  if (found.includes(word)) {
    //scenario if word has already been found.
    console.log(`${word} has already been found, try again!`);
    console.clear();
  } else {
    if (words.includes(word)) {
      //if word is correct and new it is pushed into found and removed from the unguessed array
      found.push(word);
      unguessed.pop(word);
      console.log(`Correct! ${word}`);
      //alert(`Correct! ${word}`);
      console.clear();
    } else {
      console.log(`${word} is not a word!`);
      //alert(`${word} is not a word!`);
      console.clear();
    }
  }
  if (word == "*") {
    //if an asterisk if inputted, the word is rescrambled and display is reset.
    scramble();
    //display status of game again
    console.log(`The word has been rescrambled and the display reset`);
    console.clear();
  }
  nextGuess();
}
