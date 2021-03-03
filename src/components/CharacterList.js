import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  const characterElements = props.characters.map((character) => {
    return (
      <CharacterCard
        key={character.id}
        character={character}
        // id={character.id}
        // name={character.name}
        // image={character.image}
        // species={character.species}
      />
    );
  });
  return <ul>{characterElements}</ul>;
};
export default CharacterList;
