import { useEffect, useState } from "react";

import Filters from "./Filters";
import CharacterList from "./CharacterList";
import callToApi from "../services/Api";

function SearchPage() {
  // 1.Variables de Estado
  const [characters, setCharacters] = useState([]);

  const [filterHouse, setFilterHouse] = useState(
    localStorage.getItem("filterHouse") || "griffindor"
  );
  const [filterCharacter, setFilterCharacter] = useState(
    localStorage.getItem("filterCharacter") || ""
  );

  const handleFilterHouse = (filterValue) => {
    console.log(`handleFilterHouse ${filterValue}`);
    localStorage.setItem("filterHouse", filterValue);
    setFilterHouse(filterValue);
  };
  const handleFilterCharacter = (filterValue) => {
    console.log(`handleFilterCharacter ${filterValue}`);
    localStorage.setItem("filterCharacter", filterValue);
    setFilterCharacter(filterValue);
  };

  const filteredCharacter = characters.filter((character) =>
    character.name.toLowerCase().includes(filterCharacter.toLowerCase())
  );

  // 2.useEffect
  // Cuando carga la página
  useEffect(() => {
    callToApi(filterHouse).then((data) => {
      setCharacters(data);
    });
  }, [filterHouse]);

  // 3. funciones de eventos
  // 4.variables para el html
  // 5.el html en el return

  return (
    <>
      <Filters
        handleFilterHouse={handleFilterHouse}
        handleFilterCharacter={handleFilterCharacter}
        filterCharacter={filterCharacter}
        filterHouse={filterHouse}
      ></Filters>
      <CharacterList characters={filteredCharacter}></CharacterList>
    </>
  );
}

export default SearchPage;
