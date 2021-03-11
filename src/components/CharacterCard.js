import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CharacterCard = (props) => {
  return (
    <article className="char__card">
      <img
        src={props.character.image}
        alt={`Picture of ${props.character.name}`}
        title={`Picture of ${props.character.name}`}
        className="char__card--img"
      />
      <h4 className="char__card--name">{props.character.name}</h4>
      <p className="char__card--species">{props.character.species}</p>

      <Link
        className="char__card--info"
        to={`/character/${props.character.id}`}
      >
        About
      </Link>
    </article>
  );
};
CharacterCard.propTypes = {
  character: PropTypes.shape({ name: PropTypes.string }).isRequired,
};
export default CharacterCard;
