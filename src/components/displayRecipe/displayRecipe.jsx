import styles from "./displayRecipe.module.css";
import { useParams } from "react-router-dom";
import fetchData from "./fetchData";
import { useState } from "react";
const DisplayRecipe = ({ recipes }) => {
  const name = useParams();
  const [selectedRecipe, setSelectedRecipe] = useState([]);
  // console.log(name.foodName);
  const filtered = recipes.filter(
    (item) => item.recipe.label === name.foodName
  );
  const data = filtered[0].recipe;
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
      <h1>Tis is display recipe page</h1>
      <h1>{data.label}</h1>
      <div className={styles.flex}>
        <div className={styles.section}>
          <img src={data.image} />
          <p>
            Cuisine:
            <em> {cuisine}</em>
          </p>
          <p>
            Dish type: <em>{dish}</em>
          </p>
          <p>
            Meal type: <em>{meal}</em>
          </p>
          <div>
            <p>Diet labels:</p>
            <em>
              {data &&
                data.dietLabels.map((label, i) => {
                  return <p key={i}>{label}</p>;
                })}
            </em>
          </div>
          <div>
            <p>Health labels:</p>
            <em>
              {data &&
                data.healthLabels.map((label, i) => {
                  return <span key={i}>{label}, </span>;
                })}
            </em>
          </div>
          <div>
            <h4>Recipe</h4>
            <p>{data.totalTime} minutes</p>
            {data &&
              data.ingredientLines.map((line, i) => {
                return <p key={i}>{line}</p>;
              })}
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
                  />
                  <p>{ingredient.text}</p>
                </div>
              );
            })}
          <h4>Nutritional Information</h4>
          <p>{data.calories.toFixed(0)} calories</p>
          <div>
            {data &&
              totalDaily.map((nutrient, i) => {
                return (
                  <div className={styles.flex}>
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
    </div>
  );
};
export default DisplayRecipe;
