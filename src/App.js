import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/navBar";
import { fetchFromApi } from "./utils";
import RecipeCard from "./components/recipeCard/recipeCard";
import DisplayRecipe from "./components/displayRecipe/displayRecipe";
function App() {
  const [recipes, setRecipes] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [timeOutId, setTimeOutId] = useState(null);
  const [isOneRecipeSelected, setIsOneRecipeSelected] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState({});
  useEffect(() => {
    if (!searchItem) {
      return;
    }
    if (timeOutId) {
      clearTimeout(timeOutId);
    }
    const newTimeOutId = setTimeout(async () => {
      const data = await fetchFromApi(searchItem);
      setRecipes(data.hits);
      setSearchItem("");
      setTimeOutId(null);
    }, 1000);
    setTimeOutId(newTimeOutId);
  }, [searchItem]);

  const handleChange = (e) => {
    setSearchItem(e.target.value);
  };
  // console.log(recipes);
  const handleCardClick = async (e, dishTitle, url) => {
    console.log(dishTitle, url);
    document.querySelector(".search-results").style.display = "none";
    const data = await fetchFromApi(dishTitle);
    const receivedData = data.hits;
    const filteredData = receivedData.filter(
      (recipe) => recipe.recipe.url === url
    );
    console.log(filteredData[0].recipe);
    setSelectedRecipe(filteredData[0].recipe);
    setIsOneRecipeSelected(true);
    // setSearchItem("");
  };
  console.log(selectedRecipe);

  return (
    <div className="App">
      <NavBar />
      <h1> recipe search </h1>
      <input type="text" value={searchItem} onChange={handleChange}></input>
      <div className="search-results">
        {recipes &&
          recipes.map((recipe, i) => (
            <RecipeCard
              title={recipe.recipe.label}
              image={recipe.recipe.image}
              key={i}
              url={recipe.recipe.url}
              handleCardClick={(e) =>
                handleCardClick(e, recipe.recipe.label, recipe.recipe.url)
              }
            />
          ))}
      </div>
      {isOneRecipeSelected && <DisplayRecipe data={selectedRecipe} />}
    </div>
  );
}

export default App;

// applicaiton id: c028241c

//application keys: edc1d57799e55f304d3d4f8f6d6414c8
