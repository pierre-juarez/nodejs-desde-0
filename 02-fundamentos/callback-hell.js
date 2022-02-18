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

const getEmpleado = (id, callback) => {
  const empleado = empleados.find((e) => e.id === id);

  if (empleado) {
    callback(null, empleado);
  } else {
    callback(`Empleado con id: ${id} no existe.`);
  }
};

getEmpleado(15, (err, empleado) => {
  if (err) {
    console.log("ERROR!!");
    return console.log(err);
  }
  console.log("Empleado existe!!");
  console.log(empleado);
});
