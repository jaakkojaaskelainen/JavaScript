'use strict';

var target = document.getElementById('target');

var firstItem = document.createElement('li');
firstItem.textContent = 'First item';

var secondItem = document.createElement('li');
secondItem.textContent = 'Second item';

var thirdItem = document.createElement('li');
thirdItem.textContent = 'Third item';

target.appendChild(firstItem);
target.appendChild(secondItem);
target.appendChild(thirdItem);
