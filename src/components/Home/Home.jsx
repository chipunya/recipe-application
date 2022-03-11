import { useState, useEffect } from "react";
import styles from "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../navBar/navBar";
import SearchBar from "../searchBar/searchBar";
import SearchResults from "../searchResults/searchResults";
import Pages from "../pages/Pages";

import { fetchFromApi } from "../utils";
import LoadingPage from "../loadingPage/LoadingPage";
function Home({ getDataFromHome }) {
  //states for fetching data
  const [recipes, setRecipes] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchItem, setSearchItem] = useState("");
  const [timeOutId, setTimeOutId] = useState(null);
  const [nextPageLink, setNextPageLink] = useState("");
  //loading state
  const [isLoading, setIsLoading] = useState(true);
  //states for saving search parameters
  const [mealType, setMealType] = useState([]);
  const [dishType, setDishtype] = useState([]);
  const [cousineType, setCousineType] = useState([]);
  const [dietLabel, setDietLabel] = useState([]);
  const [healthLabel, setHealthLabel] = useState([]);

  useEffect(() => {
    if (!searchItem) {
      setIsLoading(false);
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
      setIsLoading(false);
      setNextPageLink(data._links.next.href);
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
      const data = await fetchFromApi("kebab");
      setRecipes(data.hits);
      setIsLoading(false);
      setNextPageLink(data._links.next.href);
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
    setIsLoading(true);
    setSearchItem(searchInput);
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
  //speech recognition

  const SpeechRecognition =
    window.speechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.onstart = function () {
    console.log("mic is activated");
  };
  recognition.onresult = function (e) {
    console.log(e.results[0][0].transcript);
    setSearchInput(e.results[0][0].transcript);
    updateSearchItem();
  };
  const voiceRecognize = () => {
    console.log("click");
    recognition.start();
  };

  const displayNextPage = async (nextPageUrl) => {
    console.log(nextPageUrl);
    try {
      const response = await fetch(nextPageUrl);
      // console.log(response);
      const data = await response.json();
      setRecipes(data.hits);
      setNextPageLink(data._links.next.href);
      console.log(data);
      return data;
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <main>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className={styles.App}>
          <NavBar handleParameters={handleParametersFromNavBar} />
          <SearchBar
            searchInput={searchInput}
            updateSearchItem={updateSearchItem}
            handleChange={handleChange}
            voiceRecognize={voiceRecognize}
          />
          <div className={styles.container}>
            <Pages displayNextPage={() => displayNextPage(nextPageLink)} />
          </div>
          <SearchResults recipes={recipes} />
        </div>
      )}
    </main>
  );
}

export default Home;

// applicaiton id: c028241c

//application keys: edc1d57799e55f304d3d4f8f6d6414c8
