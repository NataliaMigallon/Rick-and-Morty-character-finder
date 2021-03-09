import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import getDataFromApi from "../services/Api";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import "../stylesheets/App.scss";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState([]);

  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []);

  const handleFilter = (data) => {
    if (data.key === "name") {
      setNameFilter(data.value);
    } else if (data.key === "species") {
      setSpeciesFilter(data.value);
    } else if (data.key === "status") {
      if (data.checked === true) {
        const newStatusFilter = [...statusFilter];
        newStatusFilter.push(data.value);
        setStatusFilter(newStatusFilter);
      } else {
        const newStatusFilter = [...statusFilter];
        const statusIndex = newStatusFilter.indexOf(data.value);
        newStatusFilter.splice(statusIndex, 1);
        setStatusFilter(newStatusFilter);
      }
    }
  };

  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(nameFilter.toLowerCase());
    })
    .filter((character) => {
      return speciesFilter === "All"
        ? true
        : character.species === speciesFilter;
    })
    .filter((character) => {
      if (statusFilter.length === 0) {
        return true;
      } else {
        return statusFilter.includes(character.status);
      }
    });

  const renderCharacterDetail = (props) => {
    const characterId = props.match.params.characterId;
    const foundCharacter = characters.find((character) => {
      return character.id === parseInt(characterId);
    });
    return <CharacterDetail character={foundCharacter} />;
  };

  const handleReset = () => {
    setNameFilter("");
    setSpeciesFilter("All");
    setStatusFilter([]);
  };

  const getStatus = () => {
    const statusArray = characters.map((character) => character.status);
    const status = new Set(statusArray);
    return Array.from(status);
  };

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Filters
            handleFilter={handleFilter}
            handleReset={handleReset}
            name={nameFilter}
            value={speciesFilter}
            statusFilter={statusFilter}
            allStatus={getStatus()}
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
