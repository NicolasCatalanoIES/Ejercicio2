const Alumno = require("./Alumno");

class Curso {
    constructor(cantidadSillas, cantidadBancos, cantidadVentanas, tieneArmario, tieneEstufa, alumnos){
        this.cantidadSillas = cantidadSillas || 0;
        this.cantidadBancos = cantidadBancos || 0;
        this.tieneArmario = tieneArmario || false;
        this.tieneEstufa = tieneEstufa || false;
        this.cantidadVentanas = cantidadVentanas || 0;
        this.alumnos = alumnos || new Alumno();
    }
}
module.exports = Curso;