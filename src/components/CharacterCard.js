import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
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

      <Link to={`/character/${props.character.id}`}>More Info</Link>
    </article>
  );
};
export default CharacterCard;

{
  /* <Link to={`/character/${props.character.id}`}>
<article className="char__card">
  <img
    src={props.character.image}
    alt={`Foto de ${props.character.name}`}
    title={`Foto de ${props.character.name}`}
    className="char__card--img"
  />
  <h4 className="char__card--name">{props.character.name}</h4>
  <p className="char__card--species">{props.character.species}</p>
</article>
</Link> */
}
