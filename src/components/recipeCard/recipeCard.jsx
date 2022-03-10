import * as React from "react";
import { Link } from "react-router-dom";
import styles from "./recipeCard.module.css";
import { BsSuitHeart, BsFillSuitHeartFill } from "react-icons/bs";
import { useState, useEffect } from "react";

const RecipeCard = ({
  data,
  btnText,
  btnRemove,
  handleRemove,
  handleClick,
  favoritesFromLocalStorage,
}) => {
  // console.log(data);
  // const favoritesFromLocalStorage =
  //   JSON.parse(localStorage.getItem("favorites")) || [];
  // const [favoriteRecipes, setFavoriteRecipes] = useState(
  //   favoritesFromLocalStorage
  // );
  const [clickedRecipe, setClickedRecipe] = useState({});
  // console.log(favoriteRecipes);
  // const saveHeartedRecipe = (e, recipeTitle) => {
  //   const heartedRecipe = allRecipes.filter(
  //     (item) => item.recipe.label === recipeTitle
  //   );
  //   const heartedRecipeData = heartedRecipe[0].recipe;
  //   // console.log("heartedRecipeData", heartedRecipeData);
  //   setClickedRecipe(heartedRecipeData);

  //   const updatedRecipes = [heartedRecipeData, ...favoriteRecipes];
  //   setFavoriteRecipes(updatedRecipes);

  //   if (favoritesFromLocalStorage) {
  //     if (
  //       !favoritesFromLocalStorage.some((i) => i.label.includes(recipeTitle))
  //     ) {
  //       localStorage.setItem(
  //         "favorites",
  //         JSON.stringify([...favoritesFromLocalStorage, heartedRecipeData])
  //       );
  //     } else {
  //       alert("this recipe is already added to your favorite recipes list! :)");
  //     }
  //   }
  //   if (!favoritesFromLocalStorage) {
  //     localStorage.setItem("favorites", JSON.stringify(heartedRecipeData));
  //   }
  // };

  // // console.log(clickedRecipe);
  // console.log("favoriteRecipes", favoriteRecipes);
  // console.log("localStorage", favoritesFromLocalStorage);

  const foodLabel = data && data.label;
  const cuisine =
    data &&
    data.cuisineType[0].toUpperCase().slice(0, 1) +
      data.cuisineType[0].slice(1, data.cuisineType[0].length);
  const dish =
    data &&
    data.dishType[0].toUpperCase().slice(0, 1) +
      data.dishType[0].slice(1, data.dishType[0].length);
  const meal =
    data &&
    data.mealType[0].toUpperCase().slice(0, 1) +
      data.mealType[0].slice(1, data.mealType[0].length);
  const title =
    data && data.label.length > 30
      ? data.label.substring(0, 28) + "..."
      : data.label;
  const fullTitle = data && data.label;

  return (
    <div className={styles.recipeCard}>
      <div className={styles.recipeCardImg}>
        <button
          className={styles.emptyHeart}
          onClick={() => handleClick(data.label)}
        >
          {favoritesFromLocalStorage &&
          favoritesFromLocalStorage.some((i) => i === fullTitle) ? (
            <BsFillSuitHeartFill name="fullHeart" />
          ) : (
            <BsSuitHeart name="emptyHeart" />
          )}
        </button>
        <img src={data.image} alt="recipe picture" />
      </div>
      <div className={styles.cardContent}>
        <p className={styles.cardTitle}>{title}</p>
        <div className={styles.cardDetails}>
          <span>
            <em>{cuisine} cuisine </em>
          </span>
          <br />
          <span>{dish}</span>
          <span> | {meal}</span>
        </div>
        <div className={styles.flex}>
          <Link to={`/recipe/${foodLabel}`}>
            <button className={styles.btn}> {btnText}</button>
          </Link>
          {btnRemove ? (
            <button
              onClick={() => handleRemove(fullTitle)}
              className={styles.btn}
            >
              {btnRemove}
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
export default RecipeCard;
