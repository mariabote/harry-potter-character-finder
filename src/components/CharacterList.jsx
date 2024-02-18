import PropTypes from "prop-types";

import CharacterCard from "./CharacterCard";

function CharacterList({ characters }) {
  const htmlList = characters.map((character, idx) => (
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

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired,
};
export default CharacterList;
