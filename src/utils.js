export const fetchFromApi = async (
  searchItem,
  mealType,
  dishType,
  cousineType,
  dietLabel,
  healthLabel
) => {
  const searchItemString =
    searchItem.trim().length > 0 ? "&q=" + searchItem : "";
  const mealTypeString =
    mealType.length > 0
      ? "&mealType=" + mealType.join("&mealType=")
      : mealType.toString();
  const dishTypeString =
    dishType.length > 0
      ? "&dishType=" + dishType.join("&dishType=")
      : dishType.toString();

  const cousineTypeString =
    cousineType.length > 0
      ? "&cuisineType=" + cousineType.join("&cuisineType=")
      : cousineType.toString();

  const dietLabelString =
    dietLabel.length > 0
      ? "&diet=" + dietLabel.join("&diet=")
      : dietLabel.toString();

  const healthLabelString =
    healthLabel.length > 0
      ? "&health=" + healthLabel.join("&health=")
      : healthLabel.toString();
  console.log(
    mealTypeString,
    dishTypeString,
    cousineTypeString,
    dietLabelString,
    healthLabelString
  );
  try {
    let APP_ID = "c028241c";
    let APP_KEY = "edc1d57799e55f304d3d4f8f6d6414c8";
    const response = await fetch(
      `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}${mealTypeString}${dishTypeString}${cousineTypeString}${dietLabelString}${healthLabelString}${searchItemString}`
    );

    console.log(response);

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};
