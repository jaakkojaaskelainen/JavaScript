'use strict';

const trigger = document.querySelector('#trigger');
const targetImage = document.querySelector('#target');

function changeImageOnHover() {
    targetImage.src = 'img/picB.jpg';
}

function resetImage() {
    targetImage.src = 'img/picA.jpg';
}

trigger.addEventListener('mouseover', changeImageOnHover);
trigger.addEventListener('mouseout', resetImage);