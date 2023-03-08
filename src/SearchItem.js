import React from "react";

const SearchItem = ({ search, setSearch }) => {
  return (
    <form className="searchItem" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        id="searchItem"
        role="searchbox"
        placeholder="Search Item"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchItem;
