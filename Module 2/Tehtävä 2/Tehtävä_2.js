'use strict';

const participantsNumber = parseInt(prompt('How many participants are there?'));

const participantsNames = [];
for (let i = 0; i < participantsNumber; i++) {
  const name = prompt(`Enter the name of participant ${i + 1}:`);
  participantsNames.push(name);
}

participantsNames.sort();

const resultElement = document.querySelector('#result');
resultElement.innerHTML = '<ol>' + participantsNames.map(name => `<li>${name}</li>`).join('') + '</ol>';