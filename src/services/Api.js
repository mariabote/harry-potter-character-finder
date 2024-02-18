const callToApi = (filterHouse = "") => {
  let url = "https://hp-api.onrender.com/api/characters";

  if (filterHouse !== "") {
    url += `/house/${filterHouse}`;
  }
  console.log(`callToApi ${url}`);
  // Llamamos a la API
  return fetch(url).then((response) => response.json());
};

export default callToApi;
