import { useEffect, useState } from "react";
import { quotes } from "./randomQuotes";
import '../fonts/font.css';

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
        <div id="quote-box" style={{backgroundColor: `${color}`}} className="content-center min-h-full">
            <div className="content-center max-w-xl min-h-64 rounded-xl bg-white m-auto grid grid-rows-2">
                <div id="text" style={{fontFamily: "Caveat", fontWeight: "bold"}} className="text-2xl text-center content-center">
                    {quote}
                </div>
                <div id="author" style={{fontFamily: "Caveat", fontWeight: "400"}} className="text-right content-center">
                    {author}
                </div>
            </div>
            <div className="max-w-max m-auto">
                <a id="tweet-quote" href={url} onClick={createURL} target="_blank">tweet quote</a>
                <button id="new-quote" onClick={handleClicked}>New Quote</button>
            </div>
        </div>
    );
}

export default RandomQuotes;