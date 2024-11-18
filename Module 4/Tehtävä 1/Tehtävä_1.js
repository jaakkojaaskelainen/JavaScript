'use strict';

document.querySelector('form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = document.querySelector('#query').value;
  try {
    const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${query}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
});
