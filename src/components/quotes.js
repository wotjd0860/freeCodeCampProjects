import { useEffect, useState } from "react";
import { quotes } from "./randomQuotes";

function RandomQuotes() {
    const bgColors = ["rgb(110 231 183)", "rgb(190 242 100)", "rgb(253 224 71)", "rgb(252 165 165)", "rgb(125 211 252)", "rgb(196 181 253)", "rgb(253 164 175)"];
    const [color, setColor] = useState(bgColors[0]);

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
        setColor(bgColors[Math.floor(Math.random() * 7)]);
    }

    function createURL() {
        let str = '"' + quote + '" - ' + author;
        setUrl("https://twitter.com/intent/tweet?text=" + str.split(" ").join("%20").split("@").join("%40").split("!").join("%21") );
    }

    return (
        <div id="quote-box" style={{backgroundColor: `${color}`}}>
        {/* <div id="quote-box" className="bg-sky-300"> */}
            <div className="max-w-sm rounded bg-white">
                <div id="text" className="text-xl">
                    {quote}
                </div>
                <div id="author">
                    {author}
                </div>
            </div>
            <a id="tweet-quote" href={url} onClick={createURL} target="_blank">tweet quote</a>
            <button id="new-quote" onClick={handleClicked}>New Quote</button>
        </div>
    );
}

export default RandomQuotes;