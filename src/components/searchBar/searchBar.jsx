const SearchBar = ({ searchItem, handleChange, updateSearchItem }) => {
  return (
    <>
      <h1>eat(); sleep(); code(); repeat();</h1>
      <p> find recipes for your favorite meals, drinks and desserts </p>
      <input
        type="text"
        value={searchItem}
        onChange={handleChange}
        placeholder="start searching"
      ></input>
      <button onClick={updateSearchItem}>search</button>
    </>
  );
};
export default SearchBar;
