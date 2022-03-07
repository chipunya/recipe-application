import RecipeCard from "../recipeCard/recipeCard";
import styles from "./searchResults.module.css";
const SearchResults = ({ recipes }) => {
  return (
    <div className={styles.searchResults}>
      {recipes &&
        recipes.map((recipe, i) => <RecipeCard data={recipe.recipe} key={i} />)}
    </div>
  );
};

export default SearchResults;
