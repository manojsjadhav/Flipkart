import { makeStyles, InputBase } from "@material-ui/core";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";

const useStyle = makeStyles((theme) => ({
  search: {
    borderRadius: 2,
    backgroundColor: "#FFF",
    width: "38%",
    marginLeft: 20,
    display: "flex",
  },
  searchIcon: {
    marginLeft: "auto",
    padding: 5,
    display: "flex",
    color: "blue",
  },
  inputRoot: {
    fontSize: "unset",
    width: "100%",
  },
  inputInput: {
    paddingLeft: 15,
    width: "100%",
  },
}));

const Search = () => {
  const classes = useStyle();
  return (
    <div className={classes.search}>
      <InputBase
        placeholder="Search for products, brands and more"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
      />
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
    </div>
  );
};

export default Search;
