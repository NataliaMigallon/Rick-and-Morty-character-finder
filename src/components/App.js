import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import getDataFromApi from "../services/Api";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import Filters from "./Filters";
import "../stylesheets/App.scss";
import Footer from "./Footer";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("All");

  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []); // con el array vacío solo se hace una llamada y evitamos un bucle

  const handleFilter = (data) => {
    if (data.key === "name") {
      setNameFilter(data.value);
    } else if (data.key === "species") {
      setSpeciesFilter(data.value);
    }
  };

  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(nameFilter.toLowerCase());
    })
    .filter((character) => {
      // if (speciesFilter === "all") {
      //   return true;
      // } else {
      //   console.log("holis");
      //   return character.species === speciesFilter;

      // }
      return speciesFilter === "All"
        ? true
        : character.species === speciesFilter;
    });

  const renderCharacterDetail = (props) => {
    //console.log(props.match.params.characterId, characters);
    const characterId = props.match.params.characterId;
    const foundCharacter = characters.find((character) => {
      return character.id === parseInt(characterId);
    });
    return <CharacterDetail character={foundCharacter} />;
  };

  const handleReset = () => {
    setNameFilter("");
    setSpeciesFilter("All");
  };

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Filters
            handleFilter={handleFilter}
            name={nameFilter}
            handleReset={handleReset}
            value={speciesFilter}
          />
          <CharacterList characters={filteredCharacters} name={nameFilter} />
        </Route>
        <Route path="/character/:characterId" render={renderCharacterDetail} />
      </Switch>
      <Footer />
    </div>
  );
};
export default App;
