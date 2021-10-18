import React from "react";
import "./Dictionary.css";

export default function Dictionary() {
  return (
    <div>
      <h1>Digital Dictionary</h1>
      <form>
        <input type="search" placeholder="Search..." className="search-bar" />
        <button type="submit" className="btn btn-primary">
          Define
        </button>
      </form>
    </div>
  );
}
