import img_quotes from "../img/bg-quotes.jpg";
import img_preview from "../img/bg-preview.png";
import img_drum from "../img/bg-drum.jpg";
import img_calculator from "../img/bg-calculator.jpg";
import img_clock from "../img/bg-clock.jpg";
import { Link } from "react-router-dom";
import "../index.css";

function Home() {
    return (
        <div>
            <div className="grid grid-cols-1 gap-4">
                <h1 className="text-4xl text-center font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">freeCodeCamp Practice Projects</span>
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></span>
                </h1>
            </div>
            <div className="container grid grid-cols-5 gap-4">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <Link to={`/randomquotes`}>
                        <img className="w-full" src={img_quotes} alt="Sunset in the mountains"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Random Quotes Practice</div>
                            <p className="text-gray-700 text-base">
                                This practice is the "Random Quotes Generation" practice. If you click the "New Quote" button on this page, the quote showing on the page will be changed. Additionally, the "tweet quote" button works for posting the current quote on the X(Twitter) page.
                            </p>
                        </div>
                    </Link>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <Link to={`/markdownpreviewer`}>
                        <img className="w-full" src={img_preview} alt="Sunset in the mountains"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Markdown Previewer Practice</div>
                            <p className="text-gray-700 text-base">
                                This practice is the "Markdown Preview" practice. There is a "textarea" component for you to write content that you want to turn into a markdown format. If you write down text in the upper area, translated markdown text will be printed in the lower area.
                            </p>
                        </div>
                    </Link>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <Link to={`/drummachine`}>
                        <img className="w-full" src={img_drum} alt="Sunset in the mountains"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Drum Machine Practice</div>
                            <p className="text-gray-700 text-base">
                                This is the "drum" project. By clicking on the buttons on the page, you can hear the sound that corresponds to each button.
                            </p>
                        </div>
                    </Link>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <Link to={`/calculator`}>
                        <img className="w-full" src={img_calculator} alt="Sunset in the mountains"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Calculator Practice</div>
                            <p className="text-gray-700 text-base">
                                This is the basic calculator project. You can calculate basic arithmetic with it.
                            </p>
                        </div>
                    </Link>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <Link to={`/clock`}>
                        <img className="w-full" src={img_clock} alt="Sunset in the mountains"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">25 + 5 Clock Practice</div>
                            <p className="text-gray-700 text-base">
                                This is a stopwatch! Use this for managing your time effectively!.
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;