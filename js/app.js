'use strict'

// console.log('hello world');

let yayCorrectAnswer = 0;
let rockStarScore = 7;

//intro prompt
function getName() {
  let userName = prompt('Hello, visitor! What is your name?');
// console.log('the userName is ' + userName);
let alertReturn = alert('Wecome, ' + userName + '! Thank you for checking out my site. Get ready for a guessing game!');
}
getName();

//first question

function getCity() {
  let homeCityOg = prompt('Am I originally from Seattle?');
// console.log(homeCityOg);
let homeCity = homeCityOg.toLowerCase();

if (homeCity === 'yes' || homeCity === 'y') {
  alert('Correct! Most of my family is here, so it is hard to leave!')
  // yayCorrectAnswer++;
} else if (homeCity === 'no' || homeCity === 'n') {
  alert('Sorry - incorrect. Seattleite through and through.')
} else {
  alert('Does not compute. Anyways...')
}
}
getCity();
// yayCorrectAnswer++;

//second question

function getChild() {
  let onlyChildOg = prompt('Do I have any siblings?');
// console.log(onlyChildOg);
let onlyChild = onlyChildOg.toLowerCase();
if (onlyChild === 'yes' || onlyChild === 'y') {
  alert('Correct! My little brother is Robert. He is the nice one.')
  // yayCorrectAnswer++;
} else if (onlyChild === 'no' || onlyChild === 'n') {
  alert('Sorry - incorrect. My little brother is Robert. He is the nice one.')
} else {
  alert('Does not compute. Anyways...')
}
}
getChild();
// yayCorrectAnswer++;

//third question

function getPets() {
  let whatPetsOg = prompt('Do I have cats?');
// console.log(whatPetsOg);
let whatPets = whatPetsOg.toLowerCase();

if (whatPets === 'yes' || whatPets === 'y') {
  alert('Correct! I have two cats. They are a handful.')
  // yayCorrectAnswer++;
} else if (whatPets === 'no' || whatPets === 'n') {
  alert('Sorry - incorrect. They are the worst, but I love them.')
} else {
  alert('Does not compute. Anyways...')
}
}
getPets();
// yayCorrectAnswer++;


//fourth question
function getColor() {
  let colorFavOg = prompt('Is my favorite color blue?');
// console.log(colorFavOg);
let colorFav = colorFavOg.toLowerCase();

if (colorFav === 'yes' || colorFav === 'y') {
  alert('Correct! Especially dark blues.')
  // yayCorrectAnswer++;
} else if (colorFav === 'no' || colorFav === 'n') {
  alert('Sorry - incorrect. But I like lots of colors.')
} else {
  alert('Does not compute. Anyways...')
}
}
getColor();
// yayCorrectAnswer++;

//fifth question

function getMusic() {
  let playMusicOG = prompt('Do I play any musical instruments?');
// console.log(playMusicOG);
  let playMusic = playMusicOG.toLowerCase();
  if (playMusic === 'yes' || playMusic === 'y') {
  alert('Correct! I play the piano.')
  // yayCorrectAnswer++;
} else if (playMusic === 'no' || playMusic === 'n') {
  alert('Sorry - incorrect. I play the piano. I used to play the clarinet as a kid but have forgotten how...')
} else {
  alert('Does not compute. Anyways...')
} 
}
getMusic();
// yayCorrectAnswer++;

//sixth question 

// still working on trying to figure the number guessing game code out... got some weird prompt bypass issues to revisit
function lesMis() {
  let userGuess; 
  let correctAnswer = 8;
  let lmAttempt = 0;
  let intLesMis;

while (intLesMis !== correctAnswer && lmAttempt < 4) {
  userGuess = prompt('How many times I have seen Les Miserables live? You have 4 guess.')
  lmAttempt++
  intLesMis = parseInt(userGuess)
  if (intLesMis !== correctAnswer) {
    if (intLesMis > correctAnswer) {
    alert('Too high! Please try again')
  }   else {
    alert('Too low! Please try again.')
    }
 
  if (intLesMis === correctAnswer) {

    alert('Good job!')
    // yayCorrectAnswer++;
  } else {
    alert('Sorry. No more guesses. The correct answer was ' + correctAnswer +".")
  }
}
}
}
lesMis();
// yayCorrectAnswer++;

// seventh question 

// food question doesn't accept cucumbers as a true answer for some reason. need to investigate. 
function getFood() {
  let foodQuestion = prompt('Last question! I have some favorite fruits & veggies for writing snacks. Can you guess one of them?');
    let foodArray = ['cucumbers', 'tomatoes', 'red peppers', 'grapes', 'blueberries'];
    let foodAttempt = 0;
    let foodAnswer = false;
  
    while (foodAttempt < 6){
      foodAttempt++;
      if(foodAnswer){
        foodQuestion = prompt('Never thought about that for a snack. Try again?');
      }
      for(let i = 0; i < foodArray.length; i++){
        if(foodQuestion === foodArray[i]){
          foodAnswer = true;
          break;
        }
      }
      if(foodAnswer){
        break;
      }
    }
    if(foodAttempt === 5 && foodAnswer === false){
      alert('Well, you tried. My list is' + foodArray);
    } else if(foodAnswer) {
      alert('Yay, you got one! My list is: ' + foodArray)
      // yayCorrectAnswer++;
    }
  }
  getFood();
  // yayCorrectAnswer++;


function getScore() {
  let userScore = alert('Good job! You got ' + yayCorrectAnswer + ' out of ' + rockStarScore + '!' );
}
getScore();

let goodbye = alert('Thank you for playing, ' + userName + '! Please enjoy the rest of the site!');
// investigating get cookies out
// random broken bits. need to fiddle with and see how to correct.