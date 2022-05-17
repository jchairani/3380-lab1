/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/
let quotes = [
    {
        quote: "The way I see it, if you want the rainbow, you gotta put up with the rain",
        source: "Dolly Parton",
        citation: "The Game Of Thrones"
    },
    {
        quote: "Not in doing what you like, but in liking what you do is the secret of happiness",
        source: "J.M. BARRIE"
    },
    {
        quote: "If you feel like there's something out there that you're supposed to be doing, if you have a pssion for it, then stop wishing and just do it",
        source: "Wanda Skyes",
        citation: "The Amazing Spiderman 2",
        year: 1996
    },
    {
        quote: "Let no one ever come to you without leaving better and happier",
        source: "Mother Teresa",
        year: 1854
    },
    {
        quote: "The purpose of our lives is to be happy",
        source: "Dalai Lama",
        citation : "No Way Home",
        year : 700
    },
    {
        quote: "You will face many defeats in life, but never let yourself be defeated",
        source: "Maya Angelou"
    }
]

/***
 * `getRandomQuote` function
***/
let getRandomQuote = () => {
    let length = quotes.length;
    let randomNumbers = Math.floor(Math.random() * length);
    return quotes[randomNumbers];
}
/***
 * `printQuote` function
 ***/
let printQuote = () => {
    let randomQuote = getRandomQuote();
    if('citation' in randomQuote && 'year' in randomQuote){
        console.log("Here");
        let quoteBox = document.getElementById("quote-box");
        quoteBox.querySelector(".quote").innerHTML = randomQuote.quote;
        quoteBox.querySelector(".source").innerHTML = randomQuote.source
        .concat(`<span class='citation'>${randomQuote.citation}</span>`)
        .concat(`<span class='year'>${randomQuote.year}</span>`);
    }
    else if('citation' in randomQuote){
        let quoteBox = document.getElementById("quote-box");
        quoteBox.querySelector(".quote").innerHTML = randomQuote.quote;
        quoteBox.querySelector(".source").innerHTML = randomQuote.source.concat(`<span class='citation'>${randomQuote.citation}</span>`);    
    }else if('year' in randomQuote){
        let quoteBox = document.getElementById("quote-box");
        quoteBox.querySelector(".quote").innerHTML = randomQuote.quote;
        quoteBox.querySelector(".source").innerHTML = randomQuote.source.concat(`<span class='year'>${randomQuote.year}</span>`);    
    }
    else{
        let quoteBox = document.getElementById("quote-box");
        quoteBox.querySelector(".quote").innerHTML = randomQuote.quote;
        quoteBox.querySelector(".source").innerHTML = randomQuote.source;
    }
    
    
}

/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/

document.getElementById('load-quote').addEventListener("click",printQuote);