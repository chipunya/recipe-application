import { useState, useEffect } from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../navBar/navBar";
import SearchBar from "../searchBar/searchBar";
import SearchResults from "../searchResults/searchResults";
import { fetchFromApi } from "../utils";
import DisplayRecipe from "../displayRecipe/displayRecipe";
import { configure } from "@testing-library/react";
import App from "../../App";
function Home() {
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
    setSearchInput("");
  };
  // console.log(recipes);
  const handleCardClick = async (e, dishTitle, url) => {
    console.log(dishTitle, url);
    // document.querySelector(".searchResults").style.display = "none";
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

  return (
    <div className="App">
      {!isOneRecipeSelected && (
        <NavBar handleParameters={handleParametersFromNavBar} />
      )}
      {!isOneRecipeSelected && (
        <SearchBar
          searchInput={searchInput}
          updateSearchItem={updateSearchItem}
          handleChange={handleChange}
        />
      )}

      {/* Routers */}

      {!isOneRecipeSelected && <SearchResults recipes={recipes} />}
      {/* {isOneRecipeSelected && <DisplayRecipe data={selectedRecipe} />} */}
    </div>
  );
}

export default Home;

// applicaiton id: c028241c

//application keys: edc1d57799e55f304d3d4f8f6d6414c8
