setTimeout(() => {
  console.log("Hola mundito");
}, 1000);

const getUsuarioByID = (id, callback) => {
  const usuario = {
    id,
    nombre: "Pierre",
  };

  setTimeout(() => {
    callback(usuario);
  }, 3000);
};

getUsuarioByID(10, (data) => {
  console.log(data.id);
  console.log(data.nombre.toUpperCase());
});
