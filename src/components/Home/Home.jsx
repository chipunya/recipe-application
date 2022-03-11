import { useState, useEffect } from "react";
import styles from "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../navBar/navBar";
import SearchBar from "../searchBar/searchBar";
import SearchResults from "../searchResults/searchResults";
import Pages from "../pages/Pages";
import Selections from "../selections/selections";

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
  const [selections, setSelections] = useState([]);
  useEffect(() => {
    if (!searchItem) {
      return;
    }
    if (timeOutId) {
      clearTimeout(timeOutId);
    }
    const newTimeOutId = setTimeout(async () => {
      try {
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
      } catch (e) {
        console.log(e);
      }
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
    e.preventDefault();
  };
  const handleEnter = (e) => {
    let val = e.target.value;
    if (e.key === "Enter") {
      e.preventDefault();
      if (val !== "") {
        setIsLoading(true);
        setSearchItem(val);
      } else {
        alert("can't pass empty string");
      }
    }
  };

  useEffect(() => {
    getDataFromHome(recipes);
  }, [recipes]);

  const updateSearchItem = () => {
    if (searchInput) {
      setIsLoading(true);
      setSearchItem(searchInput);
    } else {
      alert("Please type something on input field");
    }
    setSearchInput("");
  };
  useEffect(() => {
    setSelections([]);
    const newSelections = [
      ...mealType,
      ...dishType,
      ...cousineType,
      ...dietLabel,
      ...healthLabel,
    ];
    const uniqueSelections = [...new Set(newSelections)];

    setSelections(uniqueSelections);
  }, [mealType, dishType, cousineType, dietLabel, healthLabel]);

  const handleParametersFromNavBar = (e) => {
    if (
      e.target.title === "mealType" &&
      !mealType.includes(e.target.name.toLowerCase())
    )
      setMealType([...mealType, e.target.name.toLowerCase()]);

    if (
      e.target.title === "dishType" &&
      !dishType.includes(e.target.innerText.toLowerCase())
    )
      setDishtype([...dishType, e.target.innerText.toLowerCase()]);
    if (
      e.target.title === "cousineType" &&
      !cousineType.includes(e.target.innerText.toLowerCase())
    )
      setCousineType([...cousineType, e.target.innerText.toLowerCase()]);
    if (
      e.target.title === "diet" &&
      !dietLabel.includes(e.target.innerText.toLowerCase())
    )
      setDietLabel([...dietLabel, e.target.innerText.toLowerCase()]);
    if (
      e.target.title === "health" &&
      !healthLabel.includes(e.target.innerText.toLowerCase())
    )
      setHealthLabel([...healthLabel, e.target.innerText.toLowerCase()]);
    setSelections([
      ...mealType,
      ...dishType,
      ...cousineType,
      ...dietLabel,
      ...healthLabel,
    ]);
  };

  const removeSelections = (e, removedItem) => {
    const filteredSelections = selections.filter(
      (selection) => selection !== removedItem
    );
    setSelections(filteredSelections);
  };

  const clearSelections = () => {
    setMealType([]);
    setDishtype([]);
    setCousineType([]);
    setDietLabel([]);
    setHealthLabel([]);
    setSelections([]);
  };

  //speech recognition
  const SpeechRecognition =
    window.speechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.onstart = function () {
    console.log("mic is activated");
  };
  recognition.onresult = function (e) {
    // console.log(e.results[0][0].transcript);
    setSearchInput(e.results[0][0].transcript);
    setIsLoading(true);
    setSearchItem(e.results[0][0].transcript);
  };
  const voiceRecognize = () => {
    // console.log("click");
    recognition.start();
  };

  const displayNextPage = async (nextPageUrl) => {
    // console.log(nextPageUrl);
    try {
      const response = await fetch(nextPageUrl);
      // console.log(response);
      const data = await response.json();
      setRecipes(data.hits);
      setNextPageLink(data._links.next.href);
      // console.log(data);
      return data;
    } catch (err) {
      console.error(err);
    }
  };
  console.log(selections);
  return (
    <main>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className={styles.App}>
          <NavBar
            saveParameter={handleParametersFromNavBar}
            clearSelections={clearSelections}
          />
          {selections.length > 0 && (
            <Selections
              selections={selections}
              removeSelections={removeSelections}
            />
          )}
          <SearchBar
            searchInput={searchInput}
            updateSearchItem={updateSearchItem}
            handleChange={handleChange}
            voiceRecognize={voiceRecognize}
            handleEnter={handleEnter}
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
