const SearchBar = ({ value, onChange }) => {
  return (
    <>
      <h1> recipe search </h1>
      <input type="text" value={value} onChange={onChange}></input>
    </>
  );
};
export default SearchBar;
