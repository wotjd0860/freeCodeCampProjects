import { useEffect, useState } from "react";
import { quotes } from "./randomQuotes";

function RandomQuotes() {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [randomNumber, setRendomNumber] = useState(0);
    const [url, setUrl] = useState("");
    
    useEffect( () => {
        setQuote(quotes[randomNumber].quote);
        setAuthor(quotes[randomNumber].author);
    }, [randomNumber]);
    
    function handleClicked() {
        setRendomNumber( Math.floor(Math.random() * 102) );
    }

    function createURL() {
        let str = '"' + quote + '" - ' + author;
        setUrl("https://twitter.com/intent/tweet?text=" + str.split(" ").join("%20").split("@").join("%40").split("!").join("%21") );
    }

    return (
        <div id="quote-box">
            <div id="text" className="text-xl">
                {quote}
            </div>
            <div id="author">
                {author}
            </div>
            <a id="tweet-quote" href={url} onClick={createURL} target="_blank">tweet quote</a>
            <button id="new-quote" onClick={handleClicked}>New Quote</button>
        </div>
    );
}

export default RandomQuotes;