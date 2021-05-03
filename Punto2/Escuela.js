const Direccion = require("./Direccion");

class Escuela {
    constructor(nombre, direccion, cantidadAulas, codigo, cursos){
        this.nombre = nombre || "Sin nombre";
        this.direccion = direccion || new Direccion();
        this.cantidadAulas = cantidadAulas || 0;
        this.codigo = codigo || "Sin codigo";
        this.cursos = cursos || [];
    }

    verInfoEscuela(){
        let infoADevolver = `La escuela ${this.nombre} ${this.codigo} tiene ${this.cantidadAulas} alumnos.
Los cursos cargados al sistema son ${this.cursos.length} y se detallan a continuación:`;
        this.cursos.forEach((curso, i) => {
            infoADevolver += `\n\t- El curso nº ${i+1} tiene los siguientes elementos en el interior:`
            infoADevolver += `\n\t\t * Cantidad de sillas: ${curso.cantidadSillas}`;
            infoADevolver += `\n\t\t * Cantidad de bancos: ${curso.cantidadBancos}`;
            infoADevolver += `\n\t\t * Cantidad de ventanas: ${curso.cantidadVentanas}`;
            infoADevolver += `\n\t\t * Tiene armario: ${curso.tieneArmario?"Si":"No"}`;
            infoADevolver += `\n\t\t * Tiene estufa: ${curso.tieneEstufa?"Si":"No"}`;
            infoADevolver += `\n\t\t * A continuación se listan los alumnos del curso:`;
            curso.alumnos.forEach((alumno, i) => {
                infoADevolver += `\n\t\t\t ${i+1}- ${alumno.nombre} ${alumno.apellido} DNI: ${alumno.dni}. Carrera que cursa: ${alumno.carrera}`;
            });
        });
        return infoADevolver;
    }
}
module.exports = Escuela;