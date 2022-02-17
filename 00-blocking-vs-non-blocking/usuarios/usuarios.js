const getUsuarioSync = (id) => {
  const startPoint = new Date().getTime();
  while (new Date().getTime() - startPoint <= 3000) {
    //Esperando
    //Haciendo fecth a BD...
    //Robando datos...
  }
  return {
    id,
    nombre: `Usuario ${id}`,
  };
};

const getUsuario = (id, callback) => {
  const usuario = {
    id,
    nombre: `Usuario ${id}`,
  };
  setTimeout(() => {
    callback(usuario);
  }, 3000);
};

module.exports = {
  getUsuario,
  getUsuarioSync,
};
