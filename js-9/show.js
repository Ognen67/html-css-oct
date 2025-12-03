let show = {};
let episodes = [];
let cast = [];

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

console.log(id);

fetch(`https://api.tvmaze.com/shows/${id}`)
  .then((res) => res.json())
  .then((res) => {
    show = res;
    renderShow();
  });

function renderShow() {
  const showContainer = document.getElementById("show-container");

  showContainer.innerHTML += `
    <h1 id="show-title">${show.name}</h1>
    <img src='${show.image.medium}' />
    `;
}

// Path parameter - https://api.tvmaze.com/shows/${id}/episodes
// Query parameter - https://api.tvmaze.com/shows?show=${id}
fetch(`https://api.tvmaze.com/shows/${id}/episodes`)
  .then((res) => res.json())
  .then((res) => {
    episodes = res;
    renderEpisodes();
  });

function renderEpisodes() {
  const episodeContainer = document.getElementById("episode-container");

  console.log(episodes);
  episodes.forEach((episode) => {
    episodeContainer.innerHTML += `
        <h1 id="episode-title">${episode.name}</h1>
        <img src='${episode.image.medium}' />
        ${episode.summary}
        `;
  });
}

fetch(`https://api.tvmaze.com/shows/${id}/cast`)
  .then((res) => res.json())
  .then((res) => {
    cast = res;
    renderCast();
  });

function renderCast() {
  const castContainer = document.getElementById("cast-container");

  cast.forEach((cast) => {
    castContainer.innerHTML += `
        <div class="cast-member">
            <img src='${cast.person.image.medium}' />
            <h2>${cast.person.name}</h2>
            <p>${cast.character.name}</p>
        </div>
        `;
  });
}
