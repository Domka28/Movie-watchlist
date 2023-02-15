import Film from "./Film.js"

const watchlistContent = document.getElementById("watchlist-content")

function render() {
    const film = localStorage.getItem('Movies');
    let newFilm = new Film(JSON.parse(film))
    watchlistContent.innerHTML = newFilm.getWatchlistHtml()
}

render()