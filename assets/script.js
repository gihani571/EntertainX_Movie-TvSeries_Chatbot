document.addEventListener("DOMContentLoaded", () => {
  const movieCardContainer = document.querySelector(".movie-card");

  fetch("details.json")
    .then((response) => response.json())
    .then((data) => {
      const movies = data.movies;

      if (!Array.isArray(movies)) {
        console.error("Movies data is not an array.");
        return;
      }

      // Generate HTML for each movie card
      const movieCards = movies.map((movie) => {
        return `
             <ul class="movies-list  has-scrollbar">

            <li>
          <div class="movie-card">
            <a href="${movie.trailer}" target="_blank">
              <figure class="card-banner">
                <img src="${movie.poster}" alt="${movie.title}">
              </figure>
            </a>
            <div class="title-wrapper">
              <h3 class="card-title">${movie.title}</h3>
              <time datetime="${movie.year}">${movie.year}</time>
            </div>
            <div class="card-meta">
              <div class="badge badge-outline">${movie.quality}</div>
              <div class="duration">${movie.duration} min</div>
              <div class="rating">⭐ ${movie.rating}</div>
            </div>
          </div>
             <li>
              </ul>
        `;
      });

      movieCardContainer.innerHTML = movieCards.join("");
    })
    .catch((error) => {
      console.error("Error fetching movie data:", error);
    });
});
