import RecipeCard from "../recipeCard/recipeCard";
const SearchResults = ({ recipes, handleCardClick }) => {
  return (
    <div className="search-results">
      {recipes &&
        recipes.map((recipe, i) => (
          <RecipeCard
            title={recipe.recipe.label}
            image={recipe.recipe.image}
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
