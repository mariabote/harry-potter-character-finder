import PropTypes from "prop-types";

function CharacterCard({ characterData }) {
  const alternateImage =
    "https://via.placeholder.com/210x295/666666/?text=HarryPotter";
  return (
    <>
      <img src={characterData.image || alternateImage}></img>
      <h3 className="character__name">{characterData.name}</h3>
      <h3 className="character__species">{characterData.species}</h3>
    </>
  );
}

CharacterCard.propTypes = {
  characterData: PropTypes.object.isRequired,
};

export default CharacterCard;
