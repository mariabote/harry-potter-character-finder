import { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import callToApi from "../services/Api";

import CharacterCard from "./CharacterCard";

function CharacterList() {
  const [characterList, setHarryPotterData] = useState([]);

  useEffect(() => {
    // Dentro de useEffect llamamos a la API
    callToApi().then((response) => {
      // Cuando la API responde guardamos los datos en el estado para que se vuelva a renderizar el componente
      setHarryPotterData(response);
    });
    // Aquí ponemos un array vacío porque solo queremos que se llame a la API la primera vez
  }, []);

  const htmlList = characterList.map((character, idx) => (
    <li key={idx} className="character__card">
      <CharacterCard
        image={character.image}
        name={character.name}
        species={character.species}
      />
    </li>
  ));

  return <ul className="character__list">{htmlList}</ul>;
}

export default CharacterList;
