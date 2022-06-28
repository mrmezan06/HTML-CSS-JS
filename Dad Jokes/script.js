const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

/* fethc->then Method */
/* function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };
    fetch('https://icanhazdadjoke.com', config)
    .then(res => res.json())
    .then(data => {
        jokeEl.innerHTML = data.joke;
    });
} */


/* Async Method is more popular */
async function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };
    const res = await fetch('https://icanhazdadjoke.com', config);
    const data = await res.json();
    jokeEl.innerHTML = data.joke;
    
}