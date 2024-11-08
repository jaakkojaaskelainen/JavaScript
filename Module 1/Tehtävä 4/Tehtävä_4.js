'use strict';

const name = prompt('Type your name.');

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const houseIndex = getRandomInt(4);
let house;

if (houseIndex === 0) {
  house = 'Gryffindor';
} else if (houseIndex === 1) {
  house = 'Slytherin';
} else if (houseIndex === 2) {
  house = 'Hufflepuff';
} else if (houseIndex === 3) {
  house = 'Ravenclaw';
}

document.querySelector('#result').innerHTML = `${name}, you are ${house}.`;
