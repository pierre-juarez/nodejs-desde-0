const fs = require("fs");
const colors = require("colors");

const crearArchivo = (base = 5) => {
  console.log("==================");
  console.log("Tabla del: ", base);
  console.log("==================");

  let salida = "";

  for (let i = 1; i < 11; i++) {
    // salida = salida + `${base} x ${i} = ${base * i}`;
    salida += `${base} x ${i} = ${base * i}  \n`;
  }

  // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
  //   if (err) throw err;
  //   console.log("Se ha creado y guardado el archivo.");
  // });

  fs.writeFileSync(`tabla-${base}-creada.txt`, salida);
  console.log("Se ha creado y guardo la tabla.");
};

const crearArchivoPromise = (base = 5) => {
  return new Promise((resolve, reject) => {
    console.log("==================");
    console.log("Tabla del: ", base);
    console.log("==================");

    let salida = "",
      nombre_archivo = `tabla-${base}-promise.txt`;

    for (let i = 1; i < 11; i++) {
      salida += `${base} x ${i} = ${base * i}  \n`;
    }

    fs.writeFileSync(nombre_archivo, salida);
    resolve(nombre_archivo);
  });
};

const crearArchivoAsync = async (base = 5, listar = false, hasta) => {
  try {
    let salida = "",
      consola = "",
      nombre_archivo = `tabla-${base}-async.txt`;

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}  \n`;
      consola += `${base} ${"x".green} ${i} ${"=".green} ${base * i}  \n`;
    }

    if (listar) {
      console.log("==================".green);
      console.log("Tabla del: ".green, colors.bgMagenta(base));
      console.log("==================".green);
      console.log(consola);
    }

    fs.writeFileSync(`./salida/${nombre_archivo}`, salida);
    return nombre_archivo;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
  crearArchivoPromise,
  crearArchivoAsync,
};
