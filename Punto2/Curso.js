class Curso {
    constructor(cantidadSillas, cantidadBancos, cantidadVentanas, tieneArmario, tieneEstufa, alumnos){
        this.cantidadSillas = cantidadSillas;
        this.cantidadBancos = cantidadBancos;
        this.tieneArmario = tieneArmario;
        this.tieneEstufa = tieneEstufa;
        this.cantidadVentanas = cantidadVentanas;
        this.alumnos = alumnos;
    }
}
module.exports = Curso;