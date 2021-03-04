import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  // const getSpecies = () => {
  //   if (props.character.species === 'human') {
  //     return 'Human';
  //   } else if (props.character.species === 'alien') {
  //     return 'Alien';
  //   }
  return (
    <article className="char__card">
      <img
        src={props.character.image}
        alt={`Foto de ${props.character.name}`}
        title={`Foto de ${props.character.name}`}
        className="char__card--img"
      />
      <h4 className="char__card--name">{props.character.name}</h4>
      <p className="char__card--species">{props.character.species}</p>

      <Link
        className="char__card--info"
        to={`/character/${props.character.id}`}
      >
        More Info
      </Link>
    </article>
  );
};
export default CharacterCard;
