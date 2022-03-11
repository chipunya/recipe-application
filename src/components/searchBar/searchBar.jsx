import styles from "./searchBar.module.css";
import { HiCode } from "react-icons/hi";
import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import Paper from "@mui/material/Paper";
import HotelRoundedIcon from "@mui/icons-material/HotelRounded";
import InputBase from "@mui/material/InputBase";
import ChevronRightTwoToneIcon from "@mui/icons-material/ChevronRightTwoTone";
import IconButton from "@mui/material/IconButton";
import ReplayTwoToneIcon from "@mui/icons-material/ReplayTwoTone";
import MicIcon from "@mui/icons-material/Mic";
import { style } from "@mui/system";
const SearchBar = ({
  searchInput,
  handleChange,
  updateSearchItem,
  voiceRecognize,
  handleEnter,
}) => {
  return (
    <>
      <p className={styles.heading}>
        <RestaurantRoundedIcon className={styles.icon} />
        eat <ChevronRightTwoToneIcon />
        <HotelRoundedIcon className={styles.icon} /> sleep
        <ChevronRightTwoToneIcon />
        <HiCode className={styles.icon} />
        code <ChevronRightTwoToneIcon />
        <ReplayTwoToneIcon className={styles.icon} />
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
            onKeyPress={handleEnter}
            inputProps={{ "aria-label": "search recipes" }}
          />
          {/* <IconButton
            onClick={updateSearchItem}
            sx={{ p: "10px" }}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton> */}
          <IconButton
            onClick={voiceRecognize}
            sx={{ p: "10px" }}
            aria-label="mic"
          >
            <MicIcon color="warning" />
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
