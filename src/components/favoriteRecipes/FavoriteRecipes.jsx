import RecipeCard from "../recipeCard/recipeCard";
import styles from "./FavoriteRecipes.module.css";
import { useEffect, useState } from "react";
const FavoriteRecipes = ({ fetchedData }) => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  //parsing data from local storage when first time rendering
  useEffect(() => {
    const itemsFromLocal = JSON.parse(localStorage.getItem("favorites"));
    setFavoriteRecipes(itemsFromLocal);
  }, []);
  //function that removes item from fav list
  const handleRemove = (imgLink) => {
    console.log(favoriteRecipes);
    const arrFiltered = favoriteRecipes.filter(
      (item) => item.image !== imgLink
    );
    localStorage.setItem("favorites", JSON.stringify(arrFiltered));
    setFavoriteRecipes(arrFiltered);
  };
  return (
    <div>
      <h1 className={styles.title}> Your Favorite Recipes</h1>
      <p>You have saved {favoriteRecipes.length} recipes so far.</p>
      <div className={styles.container}>
        {favoriteRecipes.map((item, i) => {
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
