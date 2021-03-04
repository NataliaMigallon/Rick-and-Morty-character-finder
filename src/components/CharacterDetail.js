import React from "react";
import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  return (
    <section>
      <header>
        <h2>{props.character.name}</h2>
        <Link to="/">
          <span>Return</span>
        </Link>
      </header>
      <main>
        <section>
          <img src={props.character.image} alt={props.character.image}></img>
          <ul>
            <li>Specie: {props.character.species}</li>
            <li>Planet: {props.character.origin.name}</li>
            <li>Episodes: {props.character.episode.length}</li>
            <li>Status: {props.character.status}</li>
          </ul>
        </section>
      </main>
    </section>
  );
};
export default CharacterDetail;
