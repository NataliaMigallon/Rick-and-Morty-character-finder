const getDataFromApi = () => {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          image: character.image,
          species: character.species,
          origin: character.origin.name, //cómo se coge la localizacion
          episode: character.episode,
          status: character.status,
          //coger más datos
        };
      });
    });
};

export default getDataFromApi;
