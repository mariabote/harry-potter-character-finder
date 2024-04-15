import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import getById from "../services/Getbyid";

function CharacterDetail({ id }) {
  const [data, setData] = useState({});
  const alternateImage =
    "https://via.placeholder.com/210x295/666666/?text=HarryPotter";
  useEffect(() => {
    getById(id).then((data) => {
      setData(data[0]);
    });
  });

  return (
    <section className="detail__container">
      <div className="detail__head">
        <img src={data.image || alternateImage}></img>
        <h3 className="detail__name">{data.name}</h3>
      </div>
      <div className="detail__data">
        <h3 className="detail__label">Status:</h3>
        <h3 className="detail__value">
          {data.alive ? "Alive ❤" : "Dead ☠"}
        </h3>
        <h3 className="detail__label">Species:</h3>
        <h3 className="detail__value">{data.species}</h3>
        <h3 className="detail__label">Gender:</h3>
        <h3 className="detail__value">{data.gender}</h3>
        <h3 className="detail__label">House:</h3>
        <h3 className="detail__value">{data.house || "No home"}</h3>
      </div>
      <Link to=".." className="character__detail__btn">
        Return
      </Link>
    </section>
  );
}

CharacterDetail.propTypes = {
  id: PropTypes.string.isRequired,
};

export default CharacterDetail;
