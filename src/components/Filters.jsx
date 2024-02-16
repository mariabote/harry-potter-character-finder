import PropTypes from "prop-types";
function Filters({ handleFilterCharacter, handleFilterHouse }) {
  const handleInputCharacter = (event) => {
    console.log(event.currentTarget.value);
    handleFilterCharacter(event.currentTarget.value);
  };
  const handleInputHouse = (event) => {
    console.log(event.currentTarget.value);
    handleFilterHouse(event.currentTarget.value);
  };
  return (
    <form className="filters__container">
      <h2>Search Character</h2>
      <input
        className="filter_character_input"
        type="text"
        onInput={handleInputCharacter}
      />
      <h2>Search House</h2>
      <select
        className="filter_house_input"
        type="text"
        onInput={handleInputHouse}
      >
        <option value="">All</option>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Hufflepuff">Hufflepuff</option>
      </select>
    </form>
  );
}

Filters.propTypes = {
  handleFilterCharacter: PropTypes.string.isRequired,
  handleFilterHouse: PropTypes.string.isRequired,
};

export default Filters;
