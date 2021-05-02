const arrayAuto = require('../app');

describe("Prueba app principal", () => {
    test("Verifico array de obj Autos", () => {
        expect(arrayAuto).toHaveLength(5);
        expect(JSON.stringify(arrayAuto[0])).toEqual(JSON.stringify({
            "marca": "Renault",
            "modelo": "11 Turbo",
            "potencia": 1400,
            "maxVelocidad": 240
        }));

    })
})