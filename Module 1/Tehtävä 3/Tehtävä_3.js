'use strict';
const number = prompt('Type a number.');
const number2 = prompt('Type another number.');
const number3 = prompt('Type a third number.');

const sum = Number(number) + Number(number2) + Number(number3);
const product = number * number2 * number3;
const average = sum / 3;

document.querySelector('#sum').innerHTML = 'The sum of the numbers is ' + sum;
document.querySelector('#product').innerHTML = 'The product of the numbers is ' + product;
document.querySelector('#average').innerHTML = 'The average of the numbers is ' + average;
