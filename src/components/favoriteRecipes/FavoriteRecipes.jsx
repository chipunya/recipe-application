import RecipeCard from "../recipeCard/recipeCard";
import styles from "./FavoriteRecipes.module.css";
import { useEffect, useState } from "react";
const FavoriteRecipes = ({ fetchedData }) => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    const itemsFromLocal = JSON.parse(localStorage.getItem("favorites"));
    setFavoriteRecipes(itemsFromLocal);
    filterData();
  }, []);
  const filterData = () => {
    const itemsFromLocal = JSON.parse(localStorage.getItem("favorites"));
    const arr = [];
    for (let el of itemsFromLocal) {
      for (let item of fetchedData) {
        if (el === item.recipe.label) arr.push(item.recipe);
      }
    }
    setFiltered(arr);
  };

  const handleRemove = (label) => {
    console.log(label);
    const arrFiltered = favoriteRecipes.filter((item) => item !== label);
    setFavoriteRecipes(arrFiltered);
    localStorage.setItem("favorites", JSON.stringify(arrFiltered));
    filterData();
  };
  return (
    <div>
      <h1 className={styles.title}> Your Favorite Recipes</h1>
      <p>You have saved {favoriteRecipes.length} recipes so far.</p>
      <div className={styles.container}>
        {filtered.map((item, i) => {
          return (
            <RecipeCard
              key={i}
              data={item}
              btnText="see the recipe"
              btnRemove="remove"
              handleRemove={handleRemove}
              favoritesFromLocalStorage={favoriteRecipes}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FavoriteRecipes;
