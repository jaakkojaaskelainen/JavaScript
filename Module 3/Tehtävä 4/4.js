'use strict';

const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

var target = (document.querySelector('#target'));

for (var i = 0; i < students.length; i++) {

    var option = document.createElement('option');
    option.id = students[i].id;
    option.textContent = students[i].name;
    target.appendChild(option);
}
