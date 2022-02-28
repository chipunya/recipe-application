import * as React from "react";

import "./recipeCard.module.css";

const RecipeCard = ({ title, image, url, handleCardClick }) => {
  return (
    <div
      className="recipe-card"
      onClick={(e) => handleCardClick(e, title, url)}
    >
      <div className="recipe-card-img">
        <img src={image} alt="recipe picture" />
      </div>
      <div className="card-content">
        <p>{title}</p>
        <button className="button">get a recipe</button>
      </div>
    </div>
  );
};
export default RecipeCard;
