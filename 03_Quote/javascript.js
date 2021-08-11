let apiQuote = [];
var quote = document.getElementById('quote');
var author = document.getElementById('author');
var container = document.getElementById('container');
var loader = document.getElementById('loader');
var twitter = document.getElementById('twitter');
var newquote = document.getElementById('new-quote');

var quoteHandel = () =>{
    currentCount = Math.floor(Math.random() * apiQuote.length); 
    console.log(apiQuote[currentCount].author);
    if(typeof(apiQuote[currentCount].author) == "object")
        apiQuote[currentCount].author = "Unknow";
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
        Load();
        quoteHandel();
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
