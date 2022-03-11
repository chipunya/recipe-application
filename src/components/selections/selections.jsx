import styles from "./selections.module.css";
import { MdOutlineCancel } from "react-icons/md";
const Selections = ({ selections, removeSelections }) => {
  return (
    <div className={styles.container}>
      {selections.map((item, i) => {
        const itemName =
          item && item.toUpperCase().slice(0, 1) + item.slice(1, item.length);
        // console.log(itemName);
        return (
          <div key={i} className={styles.selection}>
            <p className={styles.name}>{itemName}</p>
            <button
              className={styles.btn}
              onClick={(e) => removeSelections(e, item)}
            >
              <MdOutlineCancel />
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default Selections;
