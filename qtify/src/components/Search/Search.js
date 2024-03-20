import React from "react";
import styles from "../Search/Search.module.css";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Divider from '@mui/material/Divider';

function Search({ placeholder }) {
  return (
    <>
      {/* <input
        type="text"
        name="album"
        placeholder={placeholder}
        className={styles.search}
        required
      />   */}
      <Paper
        component="form"
        sx={{  display: "flex", alignItems: "center", width: 400 }}
      >    
        <InputBase
          sx={{ ml: 1, flex: 1}}
          placeholder={placeholder}
        />
         <Divider sx={{ height:40, m: 0.5 }} orientation="vertical" />
        <IconButton type="button" sx={{ p: "10px"}} aria-label="search">
          <SearchIcon />
        </IconButton>    
      </Paper>
    </>
  );
}

export default Search;
