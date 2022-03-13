const http = require("http");
http
  .createServer((req, resp) => {
    // resp.writeHead(200, { "Content-Type": "application/json" });
    resp.setHeader("Content-Disposition", "attachment; filename=lista.csv");
    resp.writeHead(200, { "Content-Type": "application/csv" });

    // const persona = {
    //   id: 1,
    //   nombre: "Pierre",
    // };

    // resp.write(JSON.stringify(persona));
    resp.write("id, nombre\n");
    resp.write("1, nombre1\n");
    resp.write("2, nombre2\n");
    resp.write("3, nombre3\n");
    resp.end();
  })
  .listen(8080);

console.log("Escuchando en el puerto", 8080);
