import styles from "./searchBar.module.css";
// import "./searchBar.module.css";
import { BsArrowRepeat } from "react-icons/bs";
// import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
// import { MicIcon } from "@mui/icons-material";
import MicIcon from "@mui/icons-material/Mic";
import { style } from "@mui/system";
const SearchBar = ({
  searchInput,
  handleChange,
  updateSearchItem,
  voiceRecognize,
}) => {
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
      <div className={styles.searchInput}>
        {/* <input
          type="text"
          value={searchInput}
          onChange={handleChange}
          placeholder="start searching"
        ></input>
        <IconButton>
          <MicIcon />
        </IconButton> */}
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 500,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Recipe"
            value={searchInput}
            onChange={handleChange}
            inputProps={{ "aria-label": "search recipes" }}
          />
          <IconButton
            onClick={updateSearchItem}
            sx={{ p: "10px" }}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton
            onClick={voiceRecognize}
            color="warning"
            sx={{ p: "10px" }}
            aria-label="mic"
          >
            <MicIcon color="error" />
          </IconButton>
        </Paper>
        {/* <div style={{ display: "inline-block" }}>
          <button className={styles.btn} onClick={updateSearchItem}>
            search
          </button>
        </div> */}
      </div>
    </>
  );
};
export default SearchBar;
