class Alumno {
    constructor(direccion, carrera, materiasActuales, materiasAdeudadas, nombre, apellido, dni){
        this.direccion = direccion;
        this.carrera = carrera;
        this.materiasActuales = materiasActuales;
        this.materiasAdeudadas = materiasAdeudadas;
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }
}
module.exports = Alumno;