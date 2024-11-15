'use strict';

const form = document.querySelector('#source');
const targetParagraph = document.querySelector('#target');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.querySelector('input[name="firstname"]').value;
    const lastName = document.querySelector('input[name="lastname"]').value;

    targetParagraph.textContent = `Your name is ${firstName} ${lastName}`;
});