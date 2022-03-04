import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navBar";
import SearchBar from "./components/searchBar/searchBar";
import SearchResults from "./components/searchResults/searchResults";
import { fetchFromApi } from "./utils";
import DisplayRecipe from "./components/displayRecipe/displayRecipe";
import { configure } from "@testing-library/react";
function App() {
  //states for fetching data
  const [recipes, setRecipes] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchItem, setSearchItem] = useState("");
  const [timeOutId, setTimeOutId] = useState(null);
  const [isOneRecipeSelected, setIsOneRecipeSelected] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState({});
  //states for saving search parameters
  const [mealType, setMealType] = useState([]);
  const [dishType, setDishtype] = useState([]);
  const [cousineType, setCousineType] = useState([]);
  const [dietLabel, setDietLabel] = useState([]);
  const [healthLabel, setHealthLabel] = useState([]);

  useEffect(() => {
    if (!searchItem) {
      return;
    }
    if (timeOutId) {
      clearTimeout(timeOutId);
    }
    const newTimeOutId = setTimeout(async () => {
      const data = await fetchFromApi(
        searchItem,
        mealType,
        dishType,
        cousineType,
        dietLabel,
        healthLabel
      );
      setRecipes(data.hits);
      setSearchItem("");
      setTimeOutId(null);
    }, 500);
    setTimeOutId(newTimeOutId);
  }, [searchItem, mealType, dishType, cousineType, dietLabel, healthLabel]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const updateSearchItem = () => {
    setSearchItem(searchInput);
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
    // setSearchInput("");
  };
  // console.log(selectedRecipe);
  const handleParametersFromNavBar = (
    e,
    mealTypeFromNavBar,
    dishTypeFromNavBar,
    cousineTypeFromNavBar,
    dietLabelFromNavBar,
    healthLabelFromNavBar
  ) => {
    setMealType(mealTypeFromNavBar);
    setDishtype(dishTypeFromNavBar);
    setCousineType(cousineTypeFromNavBar);
    setDietLabel(dietLabelFromNavBar);
    setHealthLabel(healthLabelFromNavBar);
  };

  console.log(mealType, dishType, cousineType, dietLabel, healthLabel);

  return (
    <div className="App">
      <NavBar handleParameters={handleParametersFromNavBar} />
      <SearchBar
        updateSearchItem={updateSearchItem}
        handleChange={handleChange}
      />
      <SearchResults recipes={recipes} handleCardClick={handleCardClick} />
      {isOneRecipeSelected && <DisplayRecipe data={selectedRecipe} />}
    </div>
  );
}

export default App;

// applicaiton id: c028241c

//application keys: edc1d57799e55f304d3d4f8f6d6414c8
