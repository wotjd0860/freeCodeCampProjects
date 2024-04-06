import Calculator from "./components/calculator";
import DrumMachine from "./components/drumMachine";
import MarkdownPreviewer from "./components/markdownPreviewer";
import RandomQuotes from "./components/quotes";
import Home from "./routes/Home";

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Home/>}></Route>
        <Route path="/randomquotes" element={<RandomQuotes/>}></Route>
        <Route path="/markdownpreviewer" element={<MarkdownPreviewer/>}></Route>
        <Route path="/drummachine" element={<DrumMachine/>}></Route>
        <Route path="/calculator" element={<Calculator/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
