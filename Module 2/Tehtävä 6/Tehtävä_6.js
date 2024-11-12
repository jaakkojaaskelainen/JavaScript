'use strict';

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function main() {
    let roll = 0;
    const results = [];

    while (roll !== 6) {
        roll = rollDice();
        results.push(roll);
    }

    const ul = document.createElement("ul");
    results.forEach(result => {
        const li = document.createElement("li");
        li.textContent = `Roll: ${result}`;
        ul.appendChild(li);
    });

    document.body.appendChild(ul);
}

main();
