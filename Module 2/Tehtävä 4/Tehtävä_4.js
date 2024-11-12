'use strict';

let numbers = [];

while (true) {
    let input = prompt("Enter a number:");
    let num = parseInt(input);

    if (num === 0) {
        break;
    }
    numbers.push(num);
}

numbers.sort((a, b) => b - a);

console.log("Numbers from largest to smallest:");
numbers.forEach(number => console.log(number));
