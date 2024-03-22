import React from "react";
import styles from "../Search/Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";

function Search({ placeholder }) {
  return (
    <>
      <form className={styles.wrapper}>
        <input
          type="text"
          name="album"
          placeholder={placeholder}
          className={styles.search}
          required
        />
        <button className={styles.searchButton} type="submit">
          <SearchIcon />
        </button>
      </form>
    </>
  );
}

export default Search;
