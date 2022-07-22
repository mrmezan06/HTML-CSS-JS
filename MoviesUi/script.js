
const api_key = '3fd2be6f0c70a2a598f084ddfb75487c';
var page = 1;
var  api_url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=true&page=${page}`;


const img_path = 'https://image.tmdb.org/t/p/w1280';
const search_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&page=1&include_adult=true&query="`;

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

async function getMovies(url) {
    const response = await fetch(url);
    const data = await response.json();
    displayMovies(data.results);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const search_term = search.value;
    if(search_term && search_term !== '') {
        getMovies(search_url + search_term);
        search.value = '';

    }else {
        window.location.reload();
    }
});

function displayMovies(movies) {
    main.innerHTML = '';
    movies.forEach(movie => {
         const { title, poster_path, vote_average, overview, release_date } = movie;
         const movie_div = document.createElement('div');
            movie_div.classList.add('movie');
            movie_div.innerHTML = `
            
            <img src="${img_path + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
                <h3>Release Date</h3>
                <span>${release_date}</span>
            </div>
        
            `;
            main.appendChild(movie_div);
    });
}

function getClassByRate(rate) {
    if(rate >= 7) {
        return 'green';
    }else if(rate >= 5 && rate < 7) {
        return 'orange';
    }else {
        return 'red';
    }
}

getMovies(api_url);

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
next.addEventListener('click', () => {
    ++page;
    getMoreMovies(page);
});

prev.addEventListener('click', () => {
    --page;
    if(page < 1) {
        page = 1;
    }
    getMoreMovies(page);
});



async function getMoreMovies(page) {
    var  api_url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&include_adult=true&sort_by=popularity.desc&page=${page}`;
        const response = await fetch(api_url);
        const data = await response.json();
        //console.log(data.results);
        displayMovies(data.results);
}