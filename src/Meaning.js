import React from "react";
import Synonyms from "./Synonyms.js";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <section className="definition-display">
        <h3 className="part-of-speech">{props.meaning.partOfSpeech}</h3>

        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <h4>{props.meaning.definitions[0].definition}</h4>
              <Synonyms synonyms={definition.synonyms} />
            </div>
          );
        })}
      </section>
    </div>
  );
}
