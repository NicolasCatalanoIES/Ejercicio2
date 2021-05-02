class Auto{
    constructor(marca, modelo, potencia=1, maxVelocidad=1){
        this.marca = marca || "Sin Marca";
        this.modelo = modelo || "Sin Modelo";
        this.potencia = potencia;
        this.maxVelocidad = maxVelocidad;
    }
    
    verAuto(){
        return `El autos es un ${this.marca} modelo ${this.modelo} 
        - Su potencia es de ${this.potencia} cc
        - Su velocidad maxima es de ${this.maxVelocidad} /KH`;
    }
    
    calcularTiempo(kilometros){

        if( typeof kilometros !== "number" ){
            throw new Error("Los kilomentos debe ser un nº entero");
        }
        else{
            let resultadoDivision = kilometros / this.maxVelocidad;
            return this.transformoNumEnHora(resultadoDivision);
        }

    }

    transformoNumEnHora(numero){
        
        if( typeof numero !== "number" ){
            throw new Error("Solo se puede transformar un nº a hora");
        }
        else{
            let numSeparadoPorComa = numero.toString().split(".");
    
            if (numSeparadoPorComa.length > 1) {
                let parteDecimal = parseInt(numSeparadoPorComa[1][0] + numSeparadoPorComa[1][1]);
                let cambioNumPorHora = Math.round(parteDecimal * 60 / 100);
                return parseFloat(numSeparadoPorComa[0] + "." + cambioNumPorHora.toString());
            } else {
                return numero
            }
        }
    }

}

module.exports = Auto;