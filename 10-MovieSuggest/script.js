const api_url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=58ecadda8ec87b15b2131c88db21ef5c";

const img_path = "https://image.tmdb.org/t/p/w500";

const search_url = 'https://api.themoviedb.org/3/search/movie?api_key=58ecadda8ec87b15b2131c88db21ef5c&query="';

getMovies(api_url)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()
    showMovies(data.results)
}

let main = document.getElementById("main")
function showMovies(movies) {
    main.innerHTML = ''


    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie
        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')
        movieEl.innerHTML = `
        <img src="${img_path + poster_path}" alt="">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            <p>${overview}</p>
        </div>`;

        main.appendChild(movieEl)
    })
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green';
    } else if (vote >= 5) {
        return 'orange';
    } else {
        return 'red';
    }
}



const form = document.getElementById("search")

form.addEventListener("keyup", () => {
    const searchTerm = form.value
    // console.log(searchTerm)

    if (searchTerm && searchTerm !== '') {
        getMovies(search_url + searchTerm)
        // form.value = ''
    } else {
        window.location.reload()
    }
})