import Film from "./Film.js"

const watchlistContent = document.getElementById("watchlist-content")

function render() {
    let moviesArray = [];
    if (localStorage.getItem('Movies') != null) {
        moviesArray = JSON.parse(localStorage.getItem('Movies'))
    }


    if (moviesArray.length < 1) {
        watchlistContent.innerHTML = `<div class="empty-watchlist">
        <h1 class="empty-text">Your watchlist is looking a little empty...</h1>
        <div class="add-movies">
        <a href="/index.html"> <img class="add-icon" src="./images/Icon2.png"></a>
            <p class="add-text">Let’s add some movies!</p>
        </div>
    </div>`
    } else {
        watchlistContent.innerHTML = ""
        for (let movie of moviesArray) {
            fetch(`https://www.omdbapi.com/?apikey=a2742fc0&t=${movie}`)
                .then(resp => resp.json())
                .then(data => {
                    let newFilm = new Film(data)
                    watchlistContent.innerHTML += newFilm.getWatchlistHtml()
                })
        }
    }
}
render()

document.addEventListener("click", function (e) {
    if (e.target.dataset.remove) {
        const moviesArray = JSON.parse(localStorage.getItem('Movies'))
        const index = moviesArray.indexOf(e.target.dataset.remove);
        if (index > -1) {
            moviesArray.splice(index, 1);
            localStorage.setItem("Movies", JSON.stringify(moviesArray))
            render()
        }
    }
})



