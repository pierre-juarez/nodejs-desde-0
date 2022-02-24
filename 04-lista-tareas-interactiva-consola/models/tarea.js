const { v4: idUnique } = require("uuid");

class Tarea {
  id = "";
  desc = "";
  completadoEn = null;

  constructor(desc) {
    this.id = idUnique();
    this.desc = desc;
    this.completadoEn = null;
  }
}

module.exports = Tarea;
