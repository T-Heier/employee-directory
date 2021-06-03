import React from "react";

function SearchBar(props) {
  return (
    <form className="searchBar">
      <input
        onChange={props}
        value={props.val}
        type="text"
        placeholder="Search"
      ></input>
    </form>
  );
}

export default SearchBar