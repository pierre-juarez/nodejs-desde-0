const axios = require("axios");

class Busquedas {
  historial = ["Ferreñafe", "Chiclayo", "Lambayeque"];

  constructor() {
    //Leer si existe de BD
  }

  get paramMapbox() {
    return {
      access_token:
        "pk.eyJ1IjoiamRvbWluZ3Vlc2giLCJhIjoiY2wwM2E2eWtlMWJhaTNkbmZ5d3J3M28zcCJ9.HFTwy-Tj4B3hG4_bThD5MQ",
      language: "es",
      limit: 5,
    };
  }

  async ciudad(lugar = "") {
    //petición HTTP
    const intance = axios.create({
      baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
      params: this.paramMapbox,
    });

    const resp = await intance.get();
    // const urlFetch =
    //   "https://api.mapbox.com/geocoding/v5/mapbox.places/fer.json?limit=5&language=es&access_token=pk.eyJ1IjoiamRvbWluZ3Vlc2giLCJhIjoiY2wwM2E2eWtlMWJhaTNkbmZ5d3J3M28zcCJ9.HFTwy-Tj4B3hG4_bThD5MQ";
    // const rpta = await axios.get(urlFetch);
    console.log(resp.data);

    //return []; //Array de lugares que coincidan
  }
}

module.exports = Busquedas;
