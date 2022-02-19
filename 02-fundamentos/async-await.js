const empleados = [
  {
    id: 1,
    nombre: "Pierre",
  },
  {
    id: 2,
    nombre: "Karol",
  },
  {
    id: 3,
    nombre: "Juan",
  },
];

const salarios = [
  {
    id: 1,
    salario: 1000,
  },
  {
    id: 2,
    salario: 2000,
  },
];

const getEmpleado = (id) => {
  return new Promise((resolve, reject) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre;

    empleado ? resolve(empleado) : reject(`No existe empleado con id: ${id}`);
  });
};

const getSalario = (id) => {
  return new Promise((resolve, reject) => {
    const salario = salarios.find((e) => e.id === id)?.salario;
    salario ? resolve(salario) : reject(`Salario no asignado al id: ${id}`);
  });
};

const getInfoUsuario = async (id) => {
  try {
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);

    return `El salario del empleado: ${empleado} es de ${salario}`;
  } catch (error) {
    // return error;
    throw error;
  }
};

const id = 2;

getInfoUsuario(id)
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));
