'use strict';

if (confirm('Should I calculate the square root?')) {
  const number = parseFloat(prompt('Enter a number:'));
  if (number < 0) {
    document.querySelector('#result').innerHTML = 'The square root of a negative number is not defined';
  } else {
    const sqrt = Math.sqrt(number);
    document.querySelector('#result').innerHTML = `The square root of ${number} is ${sqrt}`;
  }
} else {
  document.querySelector('#result').innerHTML = 'The square root is not calculated.';
}