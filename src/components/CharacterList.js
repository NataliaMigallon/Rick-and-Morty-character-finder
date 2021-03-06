import React from "react";
import CharacterCard from "./CharacterCard";
import PropTypes from "prop-types";

const CharacterList = (props) => {
  const characterElements = props.characters
    .sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      } else {
        return 0;
      }
    })
    .map((character) => {
      return (
        <li key={character.id}>
          <CharacterCard
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
      <div className="no-matches">
        <p className="no-matches__text">{`There is not a character that matches with "${props.name}"`}</p>
        <img
          className="no-matches__gif"
          src="https://media.giphy.com/media/3o85xuO1siCT147FrG/giphy.gif"
        ></img>
      </div>
    );

  return <section className="char__results">{searchResults}</section>;
};
CharacterList.propTypes = {
  characters: PropTypes.array.isRequired, //PropTypes.arrayOf(PropTypes.object),
};
export default CharacterList;
