import RecipeCard from "../recipeCard/recipeCard";
import styles from "./searchResults.module.css";
const SearchResults = ({ recipes, handleCardClick }) => {
  return (
    <div className={styles.searchResults}>
      {recipes &&
        recipes.map((recipe, i) => (
          <RecipeCard
            // title={recipe.recipe.label}
            // image={recipe.recipe.image}
            // cuisine={recipe.recipe.cuisineType}
            data={recipe.recipe}
            key={i}
            url={recipe.recipe.url}
            handleCardClick={(e) =>
              handleCardClick(e, recipe.recipe.label, recipe.recipe.url)
            }
          />
        ))}
    </div>
  );
};

export default SearchResults;
