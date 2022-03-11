import RecipeCard from "../recipeCard/recipeCard";
import styles from "./FavoriteRecipes.module.css";
import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const FavoriteRecipes = ({ fetchedData }) => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [recipeCards, updateRecipeCards] = useState([]);

  //parsing data from local storage when first time rendering
  useEffect(() => {
    const itemsFromLocal = JSON.parse(localStorage.getItem("favorites"));
    setFavoriteRecipes(itemsFromLocal);
    updateRecipeCards(itemsFromLocal);
  }, []);
  //function that removes item from fav list
  const handleRemove = (imgLink) => {
    console.log(favoriteRecipes);
    const arrFiltered = recipeCards.filter((item) => item.image !== imgLink);
    localStorage.setItem("favorites", JSON.stringify(arrFiltered));
    updateRecipeCards(arrFiltered);
  };

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(recipeCards);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    updateRecipeCards(items);
  }
  return (
    <div>
      <h1 className={styles.title}> Your Favorite Recipes</h1>
      <p>You have saved {recipeCards.length} recipes so far.</p>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId={styles.container}>
          {(provided) => (
            <ul
              className={styles.container}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {recipeCards.map((item, i) => {
                return (
                  <Draggable key={i} draggableId={item.image} index={i}>
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <RecipeCard
                          data={item}
                          btnText="see the recipe"
                          btnRemove="remove"
                          handleRemove={handleRemove}
                          favoritesFromLocalStorage={favoriteRecipes}
                        />
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default FavoriteRecipes;
