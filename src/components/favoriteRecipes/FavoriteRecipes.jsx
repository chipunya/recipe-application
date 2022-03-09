import { Routes, Route } from "react-router-dom";
import RecipeCard from "../recipeCard/recipeCard";
import DisplayRecipe from "../displayRecipe/displayRecipe";
import styles from "./FavoriteRecipes.module.css";
const FavoriteRecipes = () => {
  const data = JSON.parse(localStorage.getItem("favorites"));
  console.log(data);
  return (
    <>
      <h1 className={styles.title}> Your Favorite Recipes</h1>
      <div className={styles.container}>
        {data.map((item, i) => {
          return <RecipeCard key={i} data={item} />;
        })}
      </div>
      <Routes>
        <Route
          path="/recipe/:foodName"
          element={<DisplayRecipe recipes={data} />}
        />
      </Routes>
    </>
  );
};

export default FavoriteRecipes;
