//function to find root word with arrow notation and "filter"
function sixLetters(dictionary) {
    return dictionary.filter(x => (x.length() < 7));

function startingWord(sixLetters) {

}
//function to randomly select a word from the array of 6 letter words  
function randomWord(min, max) {
    return Math.floor(Math.random() * sixLetters.length());

}

//first attempt at same function with forEach
//function sixLetters(dictionary) {
  //let root = [];
  //dictionary.forEach((x) => {
    //if (x.length() == 6) root.push(x);
  //});
  //return root();
//}



