import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <nav className="navbar bg-light search-navbar">
      <div className="container-fluid justify-content-end">
        <form className="d-flex search-form" role="search">
          <input
            className="form-control me-2 search-input"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success search-button"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Search;
