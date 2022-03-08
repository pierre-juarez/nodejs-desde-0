const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async () => {
  let opt = "";

  do {
    opt = await inquirerMenu();

    console.log("Opción seleccionada", opt);
    const busquedas = new Busquedas();

    switch (opt) {
      case 1:
        //Mostrar mensaje al usuario
        const lugar = await leerInput("Ingrese ciudad a buscar: ");
        busquedas.ciudad(lugar);

        //Buscamos los lugares

        //Seleccionamos los lugares

        //Clima

        //Mostramos resultados
        console.log("\nInformación de lugar\n".green);
        console.log("Ciudad:");
        console.log("Lat:");
        console.log("Lng:");
        console.log("Temperatura:");
        console.log("Mínima:");
        console.log("Máxima:");
        break;
      case 2:
        break;
    }
    if (opt !== 0) await pausa();
  } while (opt !== 0);
};
main();
