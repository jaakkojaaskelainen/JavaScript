'use strict';

let numbers = [];

while (true) {
    let input = prompt("Enter a number:");
    let num = parseInt(input);

    if (numbers.includes(num)) {
        break;
    }

    numbers.push(num);
    numbers.sort((a, b) => a - b);
}
    console.log("Numbers from smallest to largest:", numbers);
