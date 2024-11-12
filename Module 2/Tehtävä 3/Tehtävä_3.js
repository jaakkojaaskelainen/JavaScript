'use strict';

const dogs = [];
for (let i = 0; i < 6; i++) {
  const name = prompt('Enter a name for a dog:');
  dogs.push(name);
}

dogs.sort().reverse();

const resultElement = document.querySelector('#result');
resultElement.innerHTML = '<ul>' + dogs.map(name => `<li>${name}</li>`).join('') + '</ul>';