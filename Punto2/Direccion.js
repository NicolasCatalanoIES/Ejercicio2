class Direccion {
    constructor(calle, barrio, departamento, provincia, pais){
        this.calle = calle || "Sin calle";
        this.barrio = barrio || "Sin barrio";
        this.departamento = departamento || "Sin departamento";
        this.provincia = provincia || "Sin provincia";
        this.pais = pais || "Sin país";
    }
}
module.exports = Direccion;