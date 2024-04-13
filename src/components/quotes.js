import { useEffect, useState } from "react";
import { quotes } from "./randomQuotes";
import '../fonts/font.css';

import { FaSquareXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function RandomQuotes() {
    const bgColors = ["rgb(110 231 183)", "rgb(190 242 100)", "rgb(253 224 71)", "rgb(252 165 165)", "rgb(125 211 252)", "rgb(196 181 253)", "rgb(253 164 175)"];
    const [color, setColor] = useState(bgColors[0]);

    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [randomNumber, setRendomNumber] = useState(0);
    const [url, setUrl] = useState("");

    const navigate = useNavigate();

    useEffect( () => {
        setRendomNumber( Math.floor(Math.random() * 102) );
    }, []);

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

    function homeBtn() {
        navigate(-1);
    }

    return (
        <div id="quote-box" style={{backgroundColor: `${color}`}} className="content-center min-h-full transition-color duration-300">
            <button id="new-quote" onClick={homeBtn} className="absolute top-4 left-4 align-middle text-center w-20 rounded-xl bg-black text-white">Home</button>

            <div className="content-stretch max-w-xl min-h-80 rounded-md bg-white m-auto grid grid-rows-5">
                <div id="text" style={{fontFamily: "Caveat", fontWeight: "bold"}} className="text-3xl text-center content-center m-4 row-span-4">
                    {quote}
                </div>
                <div id="author" style={{fontFamily: "Caveat", fontWeight: "400"}} className="text-xl text-right content-center m-2 row-span-1">
                    {author}
                </div>
            </div>
            <div className="max-w-xl m-auto flex flex-row">
                <div className="w-2/3 mt-3">
                    <a id="tweet-quote" href={url} onClick={createURL} target="_blank">
                        <FaSquareXTwitter size="40"/>
                    </a>
                </div>
                <button id="new-quote" onClick={handleClicked} className="mt-3 align-middle text-center w-1/3 rounded-xl bg-black text-white">New Quote</button>
            </div>
        </div>
    );
}

export default RandomQuotes;