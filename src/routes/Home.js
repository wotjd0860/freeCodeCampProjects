import { Link } from "react-router-dom";
import "../index.css";

function Home() {
    return (
        <div>
            <div className="container">
                Home Page
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