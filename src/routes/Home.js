import RandomQuotes from "../components/quotes";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            Home Page
            <h2>
                <Link to={`/randomquotes`}>Random Quotes Practice</Link>
            </h2>
            <h2>
                <Link to={`/markdownpreviewer`}>Markdown Previewer Practice</Link>
            </h2>
        </div>
    );
}

export default Home;