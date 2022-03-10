import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import styles from "./pages.module.css";

export default function Pages({ displayNextPage }) {
  return (
    <div className={styles.container}>
      <Stack spacing={2}>
        <Pagination count={10} onClick={displayNextPage} />
      </Stack>
    </div>
  );
}
