require("dotenv").config();

const {
  inquirerMenu,
  pausa,
  leerInput,
  listarLugares,
} = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async () => {
  const busquedas = new Busquedas();
  let opt;

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case 1:
        //Mostrar mensaje al usuario
        const termino_busqueda = await leerInput("Ingrese ciudad a buscar: ");

        //Buscamos los lugares
        const lugares = await busquedas.ciudad(termino_busqueda);

        //Seleccionamos los lugares
        const id = await listarLugares(lugares);
        if (id === "0") continue;

        const lugarSeleccionado = lugares.find((l) => l.id === id);

        //guardar en BD
        busquedas.agregarHistorial(lugarSeleccionado.nombre);

        //Clima
        const clima = await busquedas.climaLugar(
          lugarSeleccionado.lat,
          lugarSeleccionado.long
        );

        //Mostramos resultados
        console.clear();
        console.log("\n Información del lugar\n".green);
        console.log("  Ciudad:", lugarSeleccionado.nombre);
        console.log("  Lat:", lugarSeleccionado.lat);
        console.log("  Long:", lugarSeleccionado.long);
        console.log("  Temperatura:", clima.temp);
        console.log("  El clima está así hoy:", clima.desc);
        console.log("  Temp. Mínima:", clima.min);
        console.log("  Temp. Máxima:", clima.max);
        break;
      case 2:
        // busquedas.historial.forEach((lugar, i) => {
        busquedas.historialCapitalizado.forEach((lugar, i) => {
          const idx = `${i + 1}.`.green;
          console.log(`${idx} ${lugar}`);
        });
        break;
    }
    if (opt !== 0) await pausa();
  } while (opt !== 0);
};
main();
