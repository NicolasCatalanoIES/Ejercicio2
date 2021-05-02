const CuentaBancaria = require("../CuentaBancaria");

describe("Prueba clase CuentaBancaria", () => {
    let cuentaPersonal = new CuentaBancaria();
    
    afterEach(() => {
        cuentaPersonal = new CuentaBancaria();        
    })

    test("Verifico la privacidad del atributo montoDisponible", () => {
        expect(cuentaPersonal.montoDisponible).toEqual(undefined);        
    })
    test("Verifico método asignar", () => {
        cuentaPersonal.asignar(100);
        expect(cuentaPersonal.getMontoDisponible()).toEqual(100);
        expect(() => {
            cuentaPersonal.asignar(5000001);
        }).toThrow();
        expect(() => {
            cuentaPersonal.asignar("");
        }).toThrow();
        expect(() => {
            cuentaPersonal.asignar([]);
        }).toThrow();
        expect(() => {
            cuentaPersonal.asignar(-9);
        }).toThrow();
    })
    test("Verifico método extraers", () => {
        
        cuentaPersonal.asignar(100);
        expect(cuentaPersonal.getMontoDisponible()).toEqual(100);
        cuentaPersonal.extraer(100);
        expect(cuentaPersonal.getMontoDisponible()).toEqual(0);
        
        cuentaPersonal.asignar(100005);
        expect(() => {
            cuentaPersonal.extraer(100001);
        }).toThrowError("No se puede extraer un monto tan elevado");
        expect(() => {
            cuentaPersonal.extraer("");
        }).toThrow();
        expect(() => {
            cuentaPersonal.extraer([]);
        }).toThrow();
        expect(() => {
            cuentaPersonal.extraer(-9);
        }).toThrow();
        
        cuentaPersonal.extraer(100000);
        expect(() => {
            cuentaPersonal.extraer(16);
        }).toThrowError("monto mayor al disponible");
    })
    
})