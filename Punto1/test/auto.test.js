const Auto = require('../Auto');

describe('Prueba clase auto', () => {

    const autoSinPar = new Auto();
    const autoConPar = new Auto("Renault", "11 Turbo", 1400, 240);

    test('Constructor sin parametros', () => {
        expect(autoSinPar.marca).toBe("Sin Marca");
        expect(autoSinPar.modelo).toBe("Sin Modelo");
        expect(autoSinPar.potencia).toBe(1);
        expect(autoSinPar.maxVelocidad).toBe(1);
    })

    test('Constructor con parametros', () => {
        expect(autoConPar.marca).toBe("Renault");
        expect(autoConPar.modelo).toBe("11 Turbo");
        expect(autoConPar.potencia).toBe(1400);
        expect(autoConPar.maxVelocidad).toBe(240);
    })

    test("Método verAuto()", () => {
        expect(typeof (autoConPar.verAuto())).toEqual("string");
        expect(typeof (autoSinPar.verAuto())).toEqual("string");
        expect(autoConPar.verAuto()).toHaveLength(119);
    })

    test("Método transformoNumEnHora()", () => {
        expect(typeof (autoConPar.transformoNumEnHora(1000))).toEqual("number");
        expect(typeof (autoConPar.transformoNumEnHora(1000.50))).toEqual("number");
        expect(() => {
            autoConPar.transformoNumEnHora("aa");
        } ).toThrowError("Solo se puede transformar");
        expect(() => {
            autoConPar.transformoNumEnHora([]);
        } ).toThrowError("Solo se puede transformar");
        
        expect(autoConPar.transformoNumEnHora(4.5)).toBe(4.3);
        expect(autoConPar.transformoNumEnHora(4.55)).toBe(4.33);
        expect(autoConPar.transformoNumEnHora(4.00)).toBe(4);
        expect(autoConPar.transformoNumEnHora(4)).toBe(4);
    })

    test("Método calcularTiempo()", () => {
        expect(() => {
            autoConPar.calcularTiempo("aa");
        } ).toThrowError("Los kilomentos");
        expect(() => {
            autoConPar.calcularTiempo([]);
        } ).toThrowError("Los kilomentos");
        expect(autoConPar.calcularTiempo(1000)).toBe(4.1)
        expect(autoConPar.calcularTiempo(240)).toBe(1)
        expect(autoConPar.calcularTiempo(250.1)).toBe(1.2)
        expect(autoSinPar.calcularTiempo(1000)).toBe(1000)
    })
})
