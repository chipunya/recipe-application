const fetchData = async (name) => {
  //   const searchItemString = name.trim().length > 0 ? "&q=" + name : "";
  try {
    let APP_ID = "c028241c";
    let APP_KEY = "edc1d57799e55f304d3d4f8f6d6414c8";
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public${name}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );

    console.log(response);

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};
export default fetchData;
