import React from "react";
import Meaning from "./Meaning.js";

export default function Content(props) {
  if (props.results) {
    return (
      <div>
        <h3>{props.results.word}</h3>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}