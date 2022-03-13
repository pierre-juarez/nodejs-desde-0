const fs = require("fs");
const axios = require("axios");

class Busquedas {
  historial = [];
  dbPath = "./db/database.json";

  constructor() {
    //Leer si existe de BD
    this.leerDB();
  }

  get historialCapitalizado() {
    return this.historial.map((lugar) => {
      let palabras = lugar.split(" ");
      palabras = palabras.map((p) => p[0].toUpperCase() + p.substring(1));
      return palabras.join(" ");
    });
  }

  get paramMapbox() {
    return {
      access_token: process.env.MAPBOX_KEY,
      language: "es",
      limit: 5,
    };
  }

  get paramsWeather() {
    return {
      appid: process.env.OPENWEATHER_KEY,
      units: "metric",
      lang: "es",
    };
  }

  async ciudad(termino_busqueda = "") {
    try {
      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${termino_busqueda}.json`,
        params: this.paramMapbox,
      });

      const resp = await instance.get();
      return resp.data.features.map((lugar) => ({
        id: lugar.id,
        nombre: lugar.place_name,
        long: lugar.center[0],
        lat: lugar.center[1],
      }));
    } catch (error) {
      return []; //Array de lugares que coincidan
    }
  }

  async climaLugar(lat, lon) {
    try {
      const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather`,
        params: { ...this.paramsWeather, lat, lon },
      });

      const resp = await instance.get();
      const { weather, main } = resp.data;

      return {
        desc: weather[0].description,
        min: main.temp_min,
        max: main.temp_max,
        temp: main.temp,
      };
    } catch (error) {
      console.log(error);
    }
  }

  agregarHistorial(lugar = "") {
    // TODO: Prevenir duplicidad
    if (this.historial.includes(lugar.toLowerCase())) {
      return;
    }

    this.historial = this.historial.splice(0, 5);

    this.historial.unshift(lugar.toLowerCase());

    //grabar en BD
    this.guardarBD();
  }

  guardarBD() {
    const payload = {
      historial: this.historial,
    };
    fs.writeFileSync(this.dbPath, JSON.stringify(payload));
  }

  leerDB() {
    //Verificar si existen datos en la BD
    if (!fs.existsSync(this.dbPath)) return;

    const info = fs.readFileSync(this.dbPath, { encoding: "utf-8" });

    if (!info) return;

    const data = JSON.parse(info);

    this.historial = data.historial;
  }
}

module.exports = Busquedas;
