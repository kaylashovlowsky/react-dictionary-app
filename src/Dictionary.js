import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [search, setSearch] = useState(" ");

  function define(event) {
    event.preventDefault();
    alert(`Searching for ${search}...`);
  }

  function handleDefinition(event) {
    setSearch(event.target.value);
  }

  return (
    <div>
      <h1>Digital Dictionary</h1>
      <form onSubmit={define}>
        <input
          type="search"
          placeholder="Search..."
          className="search-bar"
          onChange={handleDefinition}
        />
        <button type="submit" className="btn btn-primary">
          Define
        </button>
      </form>
    </div>
  );
}
