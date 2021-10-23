import React, { useState } from "react";
import axios from "axios";
import Content from "./Content.js";
import Photos from "./Photos.js";
import "./Dictionary.css";

export default function Dictionary() {
  let [search, setSearch] = useState(" ");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function handleDisplayPhotos(response) {
    setPhotos(response.data.photos);
  }

  function define(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f9170000100000160cd5418d5004c1683c208eb1dd036fa";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${search}&per_page=9`;

    let headers = { Authorization: `Bearer ${pexelsApiKey}` };

    axios.get(pexelsApiUrl, { headers: headers }).then(handleDisplayPhotos);
  }

  function handleDefinition(event) {
    setSearch(event.target.value);
  }

  return (
    <div>
      <h1>Digital Dictionary</h1>
      <hr />
      <form onSubmit={define} className="form">
        <div className="search-text">What do you want to search for?</div>
        <input
          type="search"
          placeholder="Search..."
          className="search-bar form-control"
          onChange={handleDefinition}
        />
      </form>
      <Content results={results} />
      <Photos photos={photos} />
    </div>
  );
}
