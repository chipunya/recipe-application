import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navBar/navBar";
import SearchBar from "./components/searchBar/searchBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import DisplayRecipe from "./components/displayRecipe/displayRecipe";
import { useState } from "react";
function App() {
  const [data, setData] = useState([]);
  const getDataFromHome = (recipes) => {
    // console.log(x);
    setData(recipes);
  };
  return (
    <div className="App">
      <div className="switch-page">
        <Router>
          <Routes>
            <Route
              path="/"
              element={<Home getDataFromHome={getDataFromHome} />}
            />
            <Route
              path="/recipe/:foodName"
              element={<DisplayRecipe recipes={data} />}
            />
            {/* <Route path="/" element={<App/>}/> */}
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;

// applicaiton id: c028241c

//application keys: edc1d57799e55f304d3d4f8f6d6414c8
