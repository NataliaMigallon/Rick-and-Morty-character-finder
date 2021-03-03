import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import getDataFromApi from "../services/Api";
import CharacterList from "./CharacterList";
import Filters from "./Filters";

console.log(getDataFromApi());

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []); // con el array vacío solo se hace una llamada y evitamos un bucle

  const handleFilter = (data) => {
    console.log("Manejando los eventos", data);
  };

  return (
    <div className="App">
      <Header />
      <CharacterList characters={characters} />
      <Filters handleFilter={handleFilter} />
    </div>
  );
};
export default App;
