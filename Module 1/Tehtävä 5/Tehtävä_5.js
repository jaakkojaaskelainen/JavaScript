const vuosiluku = parseInt(prompt('Anna vuosiluku: '));
if (vuosiluku % 4 === 0 && vuosiluku % 100 !== 0 || vuosiluku % 400 === 0)
{
  console.log('Vuosi on karkausvuosi.');
  document.querySelector('#result').innerHTML = 'Vuosi on karkausvuosi.';
}
else {
  console.log('Vuosi ei ole karkausvuosi.');
  document.querySelector('#result').innerHTML = 'Vuosi ei ole karkausvuosi.';
}