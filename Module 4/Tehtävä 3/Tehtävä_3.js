const form = document.querySelector('form');
const resultsContainer = document.querySelector('#results');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const query = document.querySelector('#query').value.trim();
    if (!query) {
        console.log('Please enter a TV show name.');
        return;
    }

    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();

        resultsContainer.innerHTML = '';

        data.forEach(tvShow => {
            const article = document.createElement('article');

            const showName = document.createElement('h2');
            showName.textContent = tvShow.show.name;
            article.appendChild(showName);

            const showLink = document.createElement('a');
            showLink.href = tvShow.show.url;
            showLink.target = '_blank';
            showLink.textContent = 'Details';
            article.appendChild(showLink);

            const img = document.createElement('img');
            img.src = tvShow.show.image?.medium || 'https://via.placeholder.com/210x295?text=No+Image';
            img.alt = tvShow.show.name;
            article.appendChild(img);

            const summary = document.createElement('div');
            summary.innerHTML = tvShow.show.summary || 'No summary available.';
            article.appendChild(summary);

            resultsContainer.appendChild(article);
        });
    } catch (error) {
        console.error('Error:', error.message);
    }
});