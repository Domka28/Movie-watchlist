import Film from "./Film.js"

const filmContent = document.getElementById("film-content")
const searchBtn = document.getElementById("search-btn")
const searchWindow = document.getElementById("search-window")


searchBtn.addEventListener("click", function (e) {
    e.preventDefault()
    if (searchWindow.value) {
        fetch(`https://www.omdbapi.com/?apikey=a2742fc0&t=${searchWindow.value}`)
            .then(resp => resp.json())
            .then(data => {

                if (data.Response === "False") {
                    filmContent.innerHTML = `<div class="start">
                    <h1 class="start-exploring">Unable to find what you’re looking for. Please try another search.</h1>
                </div>`
                } else {
                    let newFilm = new Film(data)
                    filmContent.innerHTML = newFilm.getNewFilmHtml()
                    searchWindow.value = ''
                }
            })
    }
})

document.addEventListener("click", function (e) {
    if (e.target.dataset.add) {
        let titleInString = e.target.dataset.add
        let moviesArray
        if (localStorage.getItem('Movies') == null) {
            moviesArray = []
        } else {
            moviesArray = JSON.parse(localStorage.getItem('Movies'))
        }
        if (!moviesArray.includes(titleInString)) {
            moviesArray.push(titleInString)
            localStorage.setItem('Movies', JSON.stringify(moviesArray))
        }
    }
})