import PropTypes from "prop-types";
function Filters({
  handleFilterCharacter,
  handleFilterHouse,
  filterHouse = "",
  filterCharacter = "",
}) {
  const handleInputCharacter = (event) => {
    event.preventDefault();
    console.log(`handleInputCharacter ${event.currentTarget.value}`);
    handleFilterCharacter(event.currentTarget.value);
  };
  const handleInputHouse = (event) => {
    console.log(`handleInputHouse ${event.currentTarget.value}`);
    handleFilterHouse(event.currentTarget.value);
  };
  return (
    <form className="filters__container">
      <h2>Search Character</h2>
      <input
        id="search__character"
        className="filter_character_input"
        type="text"
        value={filterCharacter}
        onInput={handleInputCharacter}
      />
      <h2>Search House</h2>
      <select
        id="search__house"
        className="filter_house_input"
        type="text"
        value={filterHouse}
        onInput={handleInputHouse}
      >
        <option value="all">All</option>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Hufflepuff">Hufflepuff</option>
      </select>
    </form>
  );
}

Filters.propTypes = {
  handleFilterCharacter: PropTypes.func.isRequired,
  handleFilterHouse: PropTypes.func.isRequired,
  filterCharacter: PropTypes.string,
  filterHouse: PropTypes.string,
};

export default Filters;
