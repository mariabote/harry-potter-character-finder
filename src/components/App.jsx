import { useEffect, useState } from "react";

import Header from "./Header";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import "../scss/App.scss";
import callToApi from "../services/Api";

function App() {
  // 1.Variables de Estado
  const [characters, setCharacters] = useState([]);

  const [filterHouse, setFilterHouse] = useState("gryffindor");
  const [filterCharacter, setFilterCharacter] = useState("");

  const handleFilterHouse = (filterValue) => {
    console.log(`handleFilterHouse ${filterValue}`);
    setFilterHouse(filterValue);
  };
  const handleFilterCharacter = (filterValue) => {
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
    <div>
      <Header></Header>
      <main>
        <Filters
          handleFilterHouse={handleFilterHouse}
          handleFilterCharacter={handleFilterCharacter}
        ></Filters>
        <CharacterList characters={filteredCharacter}></CharacterList>
      </main>
    </div>
  );
}

export default App;
