

class Film {
    constructor(data) {
        Object.assign(this, data)
    }
    getNewFilmHtml() {
        const { Title, Genre, imdbRating, Runtime, Poster, Plot } = this

        return `<div class="section-content">
            <div>
                <img src="${Poster}">
            </div>
            <div class="description">
                <div class="title-star-rate">
                    <h3 class="title">${Title}</h3>
                    <img class="star" src="images/icon.png">
                    <p class="rate">${imdbRating}</p>
                </div>
                <div class="time-genre-watchlist">
                    <p>${Runtime}</p>
                    <p class="genre">${Genre}</p>
                    <img class="icon" data-add='${Title}' id="icon" src="images/icon2.png">
                    <p>Watchlist</p>
                </div>
                <div class="desc">
                    <p>${Plot}</p>
                </div>
            </div>
        </div>`
    }

    getWatchlistHtml() {
        const { Title, Genre, imdbRating, Runtime, Poster, Plot } = this
        return `<div class="section-content">
        <div>
            <img src="${Poster}">
        </div>
        <div class="description">
            <div class="title-star-rate">
                <h3 class="title">${Title}</h3>
                <img class="star" src="images/icon.png">
                <p class="rate">${imdbRating}</p>
            </div>
            <div class="time-genre-watchlist">
                <p>${Runtime}</p>
                <p class="genre">${Genre}</p>
                <img class="icon" data-remove='${Title}' src="images/remowe_icon.png">
                <p>Remove</p>
            </div>
            <div class="desc">
                <p>${Plot}</p>
            </div>
        </div>
    </div>`
    }
}




export default Film