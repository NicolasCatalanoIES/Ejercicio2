// 3. Crear una clase Cuenta Bancaria a la cual le podemos asignar fondos y sacar fondos
// Si le asignamos más de 500000 disparamos una alarma
// Si intentamos sacar más de lo que disponemos disparamos otra alarma
// Si intentamos sacar más de 100000 disparamos otra alarma

const CuentaBancaria = require("./CuentaBancaria");

const cuentaPersonal = new CuentaBancaria();

console.log("Monto disponible a la hora de crear la cuenta:\n\t" + cuentaPersonal.getMontoDisponible());
cuentaPersonal.asignar(100);
console.log("Monto disponible despues de asignar $100 a la cuenta:\n\t" + cuentaPersonal.getMontoDisponible());
cuentaPersonal.extraer(100);
console.log("Monto disponible despues de extraer $100 a la cuenta:\n\t" + cuentaPersonal.getMontoDisponible());


