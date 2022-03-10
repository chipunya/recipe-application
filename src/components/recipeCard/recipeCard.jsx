import * as React from "react";
import { Link } from "react-router-dom";
import styles from "./recipeCard.module.css";
import { BsSuitHeart, BsFillSuitHeartFill } from "react-icons/bs";

const RecipeCard = ({
  data,
  btnText,
  btnRemove,
  handleRemove,
  handleClick,
  favoritesFromLocalStorage,
}) => {
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
        <button className={styles.emptyHeart} onClick={() => handleClick(data)}>
          {favoritesFromLocalStorage &&
          favoritesFromLocalStorage.some((i) => i.image === data.image) ? (
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
              onClick={() => handleRemove(data.image)}
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
