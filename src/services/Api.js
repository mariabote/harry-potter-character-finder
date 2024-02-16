const callToApi = () => {
    // Llamamos a la API
    return fetch("https://hp-api.onrender.com/api/characters/house/gryffindor") 
      .then((response) => response.json());
  };
  
  export default callToApi;