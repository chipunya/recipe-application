import styles from "./displayRecipe.module.css";
import { useParams } from "react-router-dom";
import { BsSuitHeart, BsFillSuitHeartFill } from "react-icons/bs";
import { useState } from "react";

const DisplayRecipe = ({ recipes }) => {
  const name = useParams();
  const filtered = recipes.filter(
    (item) => item.recipe.label === name.foodName
  );
  const data = filtered[0].recipe;
  console.log(filtered);

  const favoritesFromLocalStorage =
    JSON.parse(localStorage.getItem("favorites")) || [];
  const [favoriteRecipes, setFavoriteRecipes] = useState(
    favoritesFromLocalStorage
  );
  const saveHeartedRecipe = () => {
    const updatedRecipes = [data, ...favoriteRecipes];
    setFavoriteRecipes(updatedRecipes);

    if (favoritesFromLocalStorage) {
      if (
        !favoritesFromLocalStorage.some((i) => i.label.includes(data.label))
      ) {
        localStorage.setItem(
          "favorites",
          JSON.stringify([...favoritesFromLocalStorage, data])
        );
      } else {
        alert("this recipe is already added to your favorite recipes list! :)");
      }
    }
    if (!favoritesFromLocalStorage) {
      localStorage.setItem("favorites", JSON.stringify(data));
    }
  };

  // fetchData(name);
  const cuisine =
    data.cuisineType[0].toUpperCase().slice(0, 1) +
    data.cuisineType[0].slice(1, data.cuisineType[0].length);
  const dish =
    data.dishType[0].toUpperCase().slice(0, 1) +
    data.dishType[0].slice(1, data.dishType[0].length);
  const meal =
    data.mealType[0].toUpperCase().slice(0, 1) +
    data.mealType[0].slice(1, data.mealType[0].length);
  const totalDaily = Object.values(data.totalDaily);
  // console.log(totalDaily);
  const totalNutrients = Object.values(data.totalNutrients);
  console.log(totalNutrients);
  return (
    <div className={styles.recipeContainer}>
      <h1 className={styles.title}>
        <em>{data.label}</em>
      </h1>
      <button
        className={styles.emptyHeart}
        onClick={(e) => saveHeartedRecipe(e, data.label)}
      >
        {favoritesFromLocalStorage &&
        favoritesFromLocalStorage.some((i) => i.label.includes(data.label)) ? (
          <BsFillSuitHeartFill name="fullHeart" />
        ) : (
          <BsSuitHeart name="emptyHeart" />
        )}
      </button>
      <div className={styles.flex}>
        <div className={styles.section}>
          <div className={styles.recipeImgContainer}>
            <img src={data.image} className={styles.recipeImg} alt={"receipeImage"}/>
          </div>
          <p>
            <b>Cuisine:</b>
            <em> {cuisine}</em>
          </p>
          <p>
            <b>Dish type: </b>
            <em>{dish}</em>
          </p>
          <p>
            <b>Meal type:</b> <em>{meal}</em>
          </p>
          <hr />
          <div>
            <p>
              <b>Diet labels:</b>
            </p>
            <em>
              {data &&
                data.dietLabels.map((label, i) => {
                  return <span key={i}>{label} | </span>;
                })}
            </em>
            <hr />
          </div>
          <div>
            <p>
              <b>Health labels:</b>
            </p>
            <em>
              {data &&
                data.healthLabels.map((label, i) => {
                  return <span key={i}>{label} | </span>;
                })}
            </em>
          </div>
          <hr />

          <div>
            <p>
              <b>Required time: </b>
              <em>{data.totalTime} minutes</em>
            </p>
            <h5>Recipe</h5>
            <ul>
              {data &&
                data.ingredientLines.map((line, i) => {
                  return (
                    <li key={i} className={styles.recipeLines}>
                      <em>{line}</em>
                    </li>
                  );
                })}
            </ul>

            <hr />
            <h4>Nutritional Information</h4>
            <p>
              <b>Calories: </b>
              <em>{data.calories.toFixed(0)}</em> calories
            </p>
            <div className={styles.nutrients}>
              {data &&
                totalDaily.map((nutrient, i) => {
                  return (
                    <div key={i} className={styles.nutrient}>
                      <p>{nutrient.label}</p>
                      <p>
                        {nutrient.quantity.toFixed(2)} {nutrient.unit}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <h4>Ingredients List</h4>

          {data &&
            data.ingredients.map((ingredient, i) => {
              return (
                <div key={i} className={styles.flex}>
                  <img
                    className={styles.ingredientImg}
                    src={ingredient.image}
                    alt={"IngredientImage"}
                  />
                  <p>{ingredient.text}</p>
                </div>
              );
            })}
          <hr />
        </div>
      </div>
    </div>
  );
};
export default DisplayRecipe;
