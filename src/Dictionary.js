import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [search, setSearch] = useState(" ");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function define(event) {
    event.preventDefault();
    alert(`Searching for ${search}...`);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`;

    axios.get(apiUrl).then(handleResponse);
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
