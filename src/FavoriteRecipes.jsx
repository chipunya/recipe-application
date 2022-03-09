import RecipeCard from "./components/recipeCard/recipeCard";
const FavoriteRecipes = () => {
  const data = JSON.parse(localStorage.getItem("favorites"));
  console.log(data);
  return (
    <div>
      <h1> Favorite Recipes</h1>
      {data[0].map((item) => {
        return <RecipeCard data={item} />;
      })}
    </div>
  );
};

export default FavoriteRecipes;
