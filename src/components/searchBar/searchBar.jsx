import styles from "./searchBar.module.css";
import { BsArrowRepeat } from "react-icons/bs";

const SearchBar = ({ searchInput, handleChange, updateSearchItem }) => {
  return (
    <>
      <p className={styles.heading}>
        eat <BsArrowRepeat /> sleep <BsArrowRepeat /> code <BsArrowRepeat />
        repeat
      </p>
      <p className={styles.intro}>
        <em>
          take a break from coding, find recipes for your favorite meals, drinks
          and desserts and treat yourself
        </em>
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
