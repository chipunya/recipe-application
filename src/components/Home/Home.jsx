import { useState, useEffect } from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../navBar/navBar";
import SearchBar from "../searchBar/searchBar";
import SearchResults from "../searchResults/searchResults";
import { fetchFromApi } from "../utils";
function Home({ getDataFromHome }) {
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

  useEffect(() => {
    if (timeOutId) {
      clearTimeout(timeOutId);
    }
    const newTimeOutId = setTimeout(async () => {
      const data = await fetchFromApi("lemon");
      setRecipes(data.hits);
      setSearchItem("");
      setTimeOutId(null);
    }, 500);
    setTimeOutId(newTimeOutId);
  }, []);
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    getDataFromHome(recipes);
  }, [recipes]);

  const updateSearchItem = () => {
    setSearchItem(searchInput);
    setSearchInput("");
  };
  // console.log(recipes);
  // const handleCardClick = async (e, dishTitle, url) => {
  //   const data = await fetchFromApi(dishTitle);
  //   const receivedData = data.hits;
  //   const filteredData = receivedData.filter(
  //     (recipe) => recipe.recipe.url === url
  //   );
  //   setSelectedRecipe(filteredData[0].recipe);
  //   setIsOneRecipeSelected(true);
  // setSearchInput("");
  // };
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
  // getDataFromHome(recipes);

  return (
    <div className="App">
      <NavBar handleParameters={handleParametersFromNavBar} />
      <SearchBar
        searchInput={searchInput}
        updateSearchItem={updateSearchItem}
        handleChange={handleChange}
      />
      <SearchResults recipes={recipes} />
    </div>
  );
}

export default Home;

// applicaiton id: c028241c

//application keys: edc1d57799e55f304d3d4f8f6d6414c8
