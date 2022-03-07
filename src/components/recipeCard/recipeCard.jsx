import * as React from "react";
import { Link } from "react-router-dom";
import styles from "./recipeCard.module.css";

const RecipeCard = ({ data }) => {
  console.log(data.label);
  const foodLabel = data.label.replaceAll(" ", "-");
  const cuisine =
    data.cuisineType[0].toUpperCase().slice(0, 1) +
    data.cuisineType[0].slice(1, data.cuisineType[0].length);
  const dish =
    data.dishType[0].toUpperCase().slice(0, 1) +
    data.dishType[0].slice(1, data.dishType[0].length);
  const meal =
    data.mealType[0].toUpperCase().slice(0, 1) +
    data.mealType[0].slice(1, data.mealType[0].length);
  const title =
    data.label.length > 30 ? data.label.substring(0, 28) + "..." : data.label;
  return (
    <div className={styles.recipeCard}>
      <div className={styles.recipeCardImg}>
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
        <Link to={`/recipe/${foodLabel}`}>get a recipe</Link>
      </div>
    </div>
  );
};
export default RecipeCard;
