const Direccion = require("./Direccion");

class Alumno {
    constructor(direccion, carrera, materiasActuales, materiasAdeudadas, nombre, apellido, dni){
        this.direccion = direccion || new Direccion();
        this.carrera = carrera || " ";
        this.materiasActuales = materiasActuales || [];
        this.materiasAdeudadas = materiasAdeudadas || [];
        this.nombre = nombre || " ";
        this.apellido = apellido || " ";
        this.dni = dni || 0;
    }
}
module.exports = Alumno;