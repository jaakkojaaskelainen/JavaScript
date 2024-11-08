'use strict';

const number = prompt('Type a number.');

let result;
const results = [];
  do {
    result = Math.floor(Math.random()*6)+1;
    results.push(result);
    console.log(result);
  } while (result < 6);

document.querySelector('#result').innerHTML = results.join(', ');