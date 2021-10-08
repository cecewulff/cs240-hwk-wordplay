//function to find root word with arrow notation and "filter"
function sixLetters(dictionary) {
  let rootWords = dictionary.filter((x) => x.length() == 6);
}
//function to randomly select a word from the array of 6 letter words
function randomWord(rootWords) {
  let wordNumber = Math.floor(Math.random() * rootWords.length());
  console.log(rootWords[wordNumber]);
}

//first attempt at same function with forEach
//function sixLetters(dictionary) {
//let root = [];
//dictionary.forEach((x) => {
//if (x.length() == 6) root.push(x);
//});
//return root();
//}
