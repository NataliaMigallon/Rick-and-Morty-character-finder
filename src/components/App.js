import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import getDataFromApi from "../services/Api";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import Filters from "./Filters";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState("");

  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []); // con el array vacío solo se hace una llamada y evitamos un bucle

  const handleFilter = (data) => {
    if (data.key === "name") {
      setNameFilter(data.value);
    }
  };

  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(nameFilter.toLowerCase());
  });

  const renderCharacterDetail = (props) => {
    //console.log(props.match.params.characterId, characters);
    const characterId = props.match.params.characterId;
    const foundCharacter = characters.find((character) => {
      return character.id === parseInt(characterId);
    });
    return <CharacterDetail character={foundCharacter} />;
  };

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Filters handleFilter={handleFilter} name={nameFilter} />
          <CharacterList characters={filteredCharacters} />
        </Route>
        <Route path="/character/:characterId" render={renderCharacterDetail} />
      </Switch>
    </div>
  );
};
export default App;
