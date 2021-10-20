import React, { useState } from "react";
import axios from "axios";
import Content from "./Content.js";
import "./Dictionary.css";

export default function Dictionary() {
  let [search, setSearch] = useState(" ");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function define(event) {
    event.preventDefault();
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
      <Content results={results} />
    </div>
  );
}
