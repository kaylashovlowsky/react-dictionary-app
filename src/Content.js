import React from "react";
import Phonetics from "./Phonetics.js";
import Meaning from "./Meaning.js";
import "./Content.css";

export default function Content(props) {
  if (props.results) {
    return (
      <div>
        <section className="word-display">
          <h3>{props.results.word}</h3>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetics phonetic={phonetic} />
              </div>
            );
          })}
        </section>

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
