'use strict'

// console.log('hello world');

let userName = prompt('Hello, visitor! What is your name?');
// console.log('the userName is ' + userName);
let alertReturn = alert('Wecome, ' + userName + '! Thank you for checking out my site. Get ready for a guessing game!');

let homeCityOg = prompt('Am I originally from Seattle?');
// console.log(homeCityOg);
let homeCity = homeCityOg.toLowerCase();

if (homeCity === 'yes' || homeCity === 'y') {
  alert('Correct! Most of my family is here, so it is hard to leave!')
} else if (homeCity === 'no' || homeCity === 'n') {
  alert('Sorry - incorrect. Seattleite through and through.')
} else {
  alert('Does not compute. Anyways...')
}

let onlyChildOg = prompt('Do I have any siblings?');
// console.log(onlyChildOg);
let onlyChild = onlyChildOg.toLowerCase();

if (onlyChild === 'yes' || onlyChild === 'y') {
  alert('Correct! My little brother is Robert. He is the nice one.')
} else if (onlyChild === 'no' || onlyChild === 'n') {
  alert('Sorry - incorrect. My little brother is Robert. He is the nice one.')
} else {
  alert('Does not compute. Anyways...')
}

let whatPetsOg = prompt('Do I have cats?');
// console.log(whatPetsOg);
let whatPets = whatPetsOg.toLowerCase();

if (whatPets === 'yes' || whatPets === 'y') {
  alert('Correct! I have two cats. They are a handful.')
} else if (whatPets === 'no' || whatPets === 'n') {
  alert('Sorry - incorrect. They are the worst, but I love them.')
} else {
  alert('Does not compute. Anyways...')
}

let colorFavOg = prompt('Is my favorite color blue?');
// console.log(colorFavOg);
let colorFav = colorFavOg.toLowerCase();

if (colorFav === 'yes' || colorFav === 'y') {
  alert('Correct! Especially dark blues.')
} else if (colorFav === 'no' || colorFav === 'n') {
  alert('Sorry - incorrect. But I like lots of colors.')
} else {
  alert('Does not compute. Anyways...')
}

let playMusicOG = prompt('Do I play any musical instruments?');
// console.log(playMusicOG);
let playMusic = playMusicOG.toLowerCase();

if (playMusic === 'yes' || playMusic === 'y') {
  alert('Correct! I play the piano.')
} else if (playMusic === 'no' || playMusic === 'n') {
  alert('Sorry - incorrect. I play the piano. I used to play the clarinet as a kid but have forgotten how...')
} else {
  alert('Does not compute. Anyways...')
}

let userGuess; 
let correctAnswer = 8;
let attempts = 0;
let intLesMis;

while (userGuess !== correctAnswer && attempts < 4) {
  userGuess = prompt('How many times I have seen Les Miserables live? You have 4 guess.')
  attempts++;
  intLesMis = parseInt(userGuess)
  if (intLesMis !== correctAnswer) {
    if (intLesMis > correctAnswer) {
    alert('Too high! Please try again')
  }   else {
    alert('Too low! Please try again.')
    }
  }
}

if (intLesMis === correctAnswer) {
  alert('Good job!')
} else  (intLesMis !== correctAnswer); {
  alert ('Sorry. No more guesses. The correct answer was ' + correctAnswer +".")
}


// let alertReturn2 = alert('Thank you for playing, ' + userName + '! Please enjoy the rest of the site!');