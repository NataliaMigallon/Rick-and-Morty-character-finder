import React from "react";

const CharacterCard = (props) => {
  return (
    <li>
      <img
        src={props.character.image}
        alt={`Foto de ${props.character.name}`}
        title={`Foto de ${props.character.name}`}
      />
      <h4>{props.character.name}</h4>
      <p>{props.character.species}</p>
    </li>
  );
};
export default CharacterCard;
