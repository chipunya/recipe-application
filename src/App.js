import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import DisplayRecipe from "./components/displayRecipe/displayRecipe";
import { useState } from "react";
import FavoriteRecipes from "./components/favoriteRecipes/FavoriteRecipes";
function App() {
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <div className="switch-page">
        <Router>
          <Routes>
            <Route path="/" element={<Home getDataFromHome={setData} />} />
            <Route
              path="/recipe/:foodName"
              element={<DisplayRecipe recipes={data} />}
            />
            <Route
              path="/favorite-recipes"
              element={<FavoriteRecipes fetchedData={data} />}
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;

// applicaiton id: c028241c

//application keys: edc1d57799e55f304d3d4f8f6d6414c8
