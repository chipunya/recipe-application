import styles from "./searchBar.module.css";
const SearchBar = ({ searchInput, handleChange, updateSearchItem }) => {
  return (
    <>
      <p className={styles.heading}>eat(); sleep(); code(); repeat();</p>
      <p className={styles.intro}>
        <em>find recipes for your favorite meals, drinks and desserts</em>
      </p>
      <input
        className={styles.input}
        type="text"
        value={searchInput}
        onChange={handleChange}
        placeholder="start searching"
      ></input>
      <button className={styles.btn} onClick={updateSearchItem}>
        search
      </button>
    </>
  );
};
export default SearchBar;
