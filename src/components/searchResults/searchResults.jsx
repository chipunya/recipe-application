import { useEffect, useState } from "react";
import RecipeCard from "../recipeCard/recipeCard";
import styles from "./searchResults.module.css";
const SearchResults = ({ recipes }) => {
  const [favoriteMeals, setFavoriteMeals] = useState([]);
  useEffect(() => {
    const itemsFromLocal = localStorage.getItem("favorites");
    setFavoriteMeals(JSON.parse(itemsFromLocal));
  }, []);
  const handleClick = (clickedMeal) => {
    const itemsFromLocal = JSON.parse(localStorage.getItem("favorites"));
    if (itemsFromLocal) {
      if (!itemsFromLocal.includes(clickedMeal)) {
        localStorage.setItem(
          "favorites",
          JSON.stringify([...itemsFromLocal, clickedMeal])
        );
        setFavoriteMeals([...itemsFromLocal, clickedMeal]);
      } else {
        alert("It is already in favorites :)");
      }
    } else {
      localStorage.setItem("favorites", JSON.stringify([clickedMeal]));
      setFavoriteMeals([clickedMeal]);
    }
  };
  return (
    <div className={styles.searchResults}>
      {recipes &&
        recipes.map((recipe, i) => (
          <RecipeCard
            allRecipes={recipes}
            data={recipe.recipe}
            key={i}
            btnText="see the recipe"
            handleClick={handleClick}
            favoritesFromLocalStorage={favoriteMeals}
          />
        ))}
    </div>
  );
};

export default SearchResults;
