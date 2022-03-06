import { Link } from "react-router-dom";
import RecipeCard from "../recipeCard/recipeCard";
const SearchResults = ({ recipes }) => {
  console.log(recipes);
  // title = recipe.recipe.label;
  // image = recipe.recipe.image;
  // url = recipe.recipe.url;
  return (
    <div className="search-results">
      <h1>THis is search results</h1>
      {recipes &&
        recipes.map(({ recipe }, i) => (
          <div className="recipe-card">
            <div className="recipe-card-img">
              <img src={recipe.image} alt="recipe picture" />
            </div>
            <div className="card-content">
              <p>{recipe.title}</p>
              <Link className="button" to={"/search-result/ads"}>
                get a recipe
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SearchResults;
