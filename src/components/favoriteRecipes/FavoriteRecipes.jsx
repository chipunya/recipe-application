import { Routes, Route } from "react-router-dom";
import RecipeCard from "../recipeCard/recipeCard";
import DisplayRecipe from "../displayRecipe/displayRecipe";
import styles from "./FavoriteRecipes.module.css";
import { useEffect, useState } from "react";
const FavoriteRecipes = () => {
  const favoritesFromLocalStorage =
    JSON.parse(localStorage.getItem("favorites")) || [];
  const [favoriteRecipes, setFavoriteRecipes] = useState(
    favoritesFromLocalStorage
  );

  const data = JSON.parse(localStorage.getItem("favorites"));
  console.log(data);
  const handleRemove = (e, label) => {
    const indexOfFound = favoritesFromLocalStorage.findIndex(
      (item) => item.label === label
    );
    const copyRecipes = [...favoriteRecipes];
    copyRecipes.splice(indexOfFound, 1);
    setFavoriteRecipes(copyRecipes);
  };
  useEffect(() => {
    // const copyRecipes = [...favoritesFromLocalStorage];
    // copyRecipes.splice(indexOfFound, 1);
    localStorage.setItem("favorites", JSON.stringify(favoriteRecipes));
  }, [favoriteRecipes]);

  console.log("faves from fav", favoriteRecipes);
  return (
    <Routes>
      <Route
        path="*"
        element={
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
                  />
                );
              })}
            </div>
          </div>
        }
      />
      <Route
        path="/recipe/:foodName"
        element={<DisplayRecipe recipes={favoriteRecipes} />}
      />
    </Routes>
  );
};

export default FavoriteRecipes;
