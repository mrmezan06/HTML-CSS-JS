const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const nextQuoteBtn = document.getElementById('next-quote');
const loader = document.getElementById('loader');

// Show Loading

function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}
// Hide Loading
function complete(){
    loader.hidden = true;
    quoteContainer.hidden = false;
}

// Get Quotes From API
let = apiQuotes = [];

function nextQuote() {
    loading();
    const index = Math.floor(Math.random() * apiQuotes.length);
    const quote = apiQuotes[index];
    quoteText.textContent = quote.text;
    authorText.textContent = quote.author ? quote.author : 'Unknown';
    if(quote.text.length > 50)
    {
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }
    // Hide Loader
    complete();
}

nextQuoteBtn.addEventListener('click', nextQuote);
twitterBtn.addEventListener('click', tweetQuote);

async function getQuotes() {
    loading();
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        nextQuote();
    } catch(error) {
       // alert(error);
       console.log(error);
    }
}

function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// OnLoad
 getQuotes();


