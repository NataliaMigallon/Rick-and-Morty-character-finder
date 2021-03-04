import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  const characterElements = props.characters.map((character) => {
    return (
      <li>
        <CharacterCard
          key={character.id}
          character={character}
          // id={character.id}
          // name={character.name}
          // image={character.image}
          // species={character.species}
        />
      </li>
    );
  });

  const searchResults =
    props.characters.length !== 0 ? (
      <ul className="char__results--list">{characterElements}</ul>
    ) : (
      <p>El personaje que buscas no existe</p>
    );

  return <section className="char__results">{searchResults}</section>;
};
export default CharacterList;
