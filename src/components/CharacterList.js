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

  // const searchResults =
  //   props.character.length !== 0 ? (
  //     <ul>{characterElements}</ul>
  //   ) : (
  //     <p>No hay ninguna coincidencia</p>
  //   );

  return (
    <section className="char__results">
      <ul className="char__results--list">{characterElements}</ul>
    </section>
  );
};
export default CharacterList;
