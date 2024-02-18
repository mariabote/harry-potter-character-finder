const getById = (id) => {
  return fetch(`https://hp-api.onrender.com/api/character/${id}`).then(
    (response) => response.json()
  );
};

export default getById;
