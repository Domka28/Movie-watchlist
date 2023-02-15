const filmContent = document.getElementById("film-content")
const watchlistContent = document.getElementById("watchlist-content")

fetch("http://www.omdbapi.com/?apikey=a2742fc0&t=titanic")
    .then(resp => resp.json())
    .then(data => console.log(data))


// 1.Pobrać dane z API
// 2.Pobierać value z input i za pomocą value wyszukiwać w
// bazie API filmów
// 3.Na początku przy wyświetlaniu strona startowa, a w watchlist też startowa
// 4.po wyszukaniu filmu strona startowa content zmienia się na film - content
// 5.Po dodaniu do watchlist strona watchlist uzyskuje 