export const fetchFromApi = async (
  searchItem,
  mealType,
  dishType,
  cousineType,
  dietLabel,
  healthLabel
) => {
  //basic parameters
  let APP_ID = "&app_id=c028241c";
  let APP_KEY = "&app_key=edc1d57799e55f304d3d4f8f6d6414c8";
  let baseUrl =
    "https://cors-anywhere.herokuapp.com/https://api.edamam.com/api/recipes/v2?type=public";

  //required parameter
  const searchItemString =
    searchItem.trim().length > 0 ? "&q=" + searchItem : "";

  //optional parameters
  const mealTypeString = !mealType
    ? ""
    : mealType.length > 0
    ? "&mealType=" + mealType.join("&mealType=")
    : mealType.toString();
  const dishTypeString = !dishType
    ? ""
    : dishType.length > 0
    ? "&dishType=" + dishType.join("&dishType=")
    : dishType.toString();

  const cousineTypeString = !cousineType
    ? ""
    : cousineType.length > 0
    ? "&cuisineType=" + cousineType.join("&cuisineType=")
    : cousineType.toString();

  const dietLabelString = !dietLabel
    ? ""
    : dietLabel.length > 0
    ? "&diet=" + dietLabel.join("&diet=")
    : dietLabel.toString();

  const healthLabelString = !healthLabel
    ? ""
    : healthLabel.length > 0
    ? "&health=" + healthLabel.join("&health=")
    : healthLabel.toString();
  // console.log(
  //   mealTypeString,
  //   dishTypeString,
  //   cousineTypeString,
  //   dietLabelString,
  //   healthLabelString
  // );
  try {
    const response = await fetch(
      `${baseUrl}${searchItemString}${APP_ID}${APP_KEY}${mealTypeString}${dishTypeString}${cousineTypeString}${dietLabelString}${healthLabelString}`
    );
    // console.log(response);
    const data = await response.json();
    // console.log(data._links.next.href);
    return data;
  } catch (err) {
    console.error(err);
  }
};
