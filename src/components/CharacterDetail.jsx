import PropTypes from "prop-types";

function CharacterDetail({ data }) {
  const alternateImage =
    "https://via.placeholder.com/210x295/666666/?text=HarryPotter";
  return (
    <>
      <img src={data.image || alternateImage}></img>
      <h3 className="detail__name">{data.name}</h3>
      <h3 className="detail__label">Estatus:</h3>
      <h3 className="detail__value">{data.alive}</h3>
      <h3 className="detail__label">Especie:</h3>
      <h3 className="detail__value">{data.species}</h3>
      <h3 className="detail__label">Género:</h3>
      <h3 className="detail__value">{data.gender}</h3>
      <h3 className="detail__label">Casa:</h3>
      <h3 className="detail__value">{data.house}</h3>
    </>
  );
}

CharacterDetail.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CharacterDetail;
