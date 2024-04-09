import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import CharacterCard from "./CharacterCard";

function CharacterList({ characters }) {
  const htmlList = characters.map((character, idx) => (
    <Link key={idx} to={"/detail/" + character.id}>
      <li  className="character__card">
        <CharacterCard characterData={character} />
      </li>
    </Link>
  ));

  return <ul className="character__list">{htmlList}</ul>;
}

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired,
};
export default CharacterList;
