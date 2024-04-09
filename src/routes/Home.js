import { Link } from "react-router-dom";
import "../index.css";

function Home() {
    return (
        <div>
            <div className="grid grid-cols-1 gap-4">
                <h1 class="text-4xl text-center font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
                    <span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">freeCodeCamp Practice Projects</span>
                    <span class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></span>
                </h1>
            </div>
            <div className="container grid grid-cols-5 gap-4">
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <Link to={`/randomquotes`}>
                        <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">Random Quotes Practice</div>
                            <p class="text-gray-700 text-base">
                            </p>
                        </div>
                    </Link>
                </div>
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <Link to={`/markdownpreviewer`}>
                        <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">Markdown Previewer Practice</div>
                            <p class="text-gray-700 text-base">
                            </p>
                        </div>
                    </Link>
                </div>
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <Link to={`/drummachine`}>
                        <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">Drum Machine Practice</div>
                            <p class="text-gray-700 text-base">
                            </p>
                        </div>
                    </Link>
                </div>
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <Link to={`/calculator`}>
                        <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">Calculator Practice</div>
                            <p class="text-gray-700 text-base">
                            </p>
                        </div>
                    </Link>
                </div>
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <Link to={`/clock`}>
                        <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">25 + 5 Clock Practice</div>
                            <p class="text-gray-700 text-base">
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;