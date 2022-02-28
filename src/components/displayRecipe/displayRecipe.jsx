const DisplayRecipe = ({ data }) => {
  console.log(data);
  return (
    <div className="recipe-container">
      <h1>{data.label}</h1>
      <p>{data.dishType}</p>
      <img src={data.image} />
      <div className="recipe-ingredients">
        {data &&
          data.ingredients.map((ingredient, i) => {
            return <p key={i}>{ingredient.text}</p>;
          })}
      </div>
    </div>
  );
};
export default DisplayRecipe;
