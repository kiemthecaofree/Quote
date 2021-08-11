let apiQuote = [];
var quote = document.getElementById('quote');
var author = document.getElementById('author');
var container = document.getElementById('container');
var loader = document.getElementById('loader');
var twitter = document.getElementById('twitter');
var newquote = document.getElementById('new-quote');
var currentCount = 0;

var quoteHandel = () =>{
    currentCount++;
    quote.innerHTML = `${apiQuote[currentCount].text}`
    author.innerHTML = `${apiQuote[currentCount].author}`
}

var Load = () => {
    loader.hidden = true;
    container.hidden = false;
}
async function getQuote(){
    const apiUrl = "https://type.fit/api/quotes";
    try{
        const response = await fetch(apiUrl);
        apiQuote = await response.json();
        quote.innerHTML = `${apiQuote[currentCount].text}`
        author.innerHTML = `${apiQuote[currentCount].author}`
        Load();
        newquote.addEventListener('click', () => {
            quoteHandel();
        })
        twitter.addEventListener('click', () => {
            window.open(`https://twitter.com/intent/tweet?text=${apiQuote[currentCount].text} - ${apiQuote[currentCount].author}`);
        })

    }catch(err) {
        alert(err);
    }
}

container.hidden = true;
setTimeout(()=>{
    getQuote();
}, 1000)