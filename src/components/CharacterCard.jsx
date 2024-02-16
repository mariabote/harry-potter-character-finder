//import PropTypes from "prop-types";

function CharacterCard({ image, name, species }) {
  const alternateImage =
    "https://via.placeholder.com/210x295/666666/?text=HarryPotter";
  return (
    <>
      <img src={image || alternateImage}></img>
      <h3 className="character__name">{name}</h3>
      <h3 className="character__species">{species}</h3>
    </>
  );
}

// QuoteItem.propTypes = {
//     quote: PropTypes.string.isRequired,
//     character: PropTypes.string.isRequired,
// };

export default CharacterCard;
