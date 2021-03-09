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
  const [typeFilter, setTypeFilter] = useState("");

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
        // Otra opción para buscar y meter los status
        // const newStatusFilter = statusFilter.filter(
        //   (status) => status !== data.value
        // );
        // setStatusFilter(newStatusFilter);
      }
    } else if (data.key === "type") {
      setTypeFilter(data.value);
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
    })
    .filter((character) => {
      if (statusFilter.length === 0) {
        return true;
      } else {
        return statusFilter.includes(character.status);
      }
      //return statusFilter.length === 0 ? true : statusFilter.includes(character.status);
    })
    .filter((character) => {
      return character.type.toLowerCase().includes(typeFilter.toLowerCase());
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
    setStatusFilter([]);
    setTypeFilter("");
  };

  //Para que las opciones no se repitan
  const getStatus = () => {
    const statusArray = characters.map((character) => character.status);
    if (Array.isArray(statusArray)) {
    }
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
            type={typeFilter}
            //statusFilter={statusFilter}
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
