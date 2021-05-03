# Ejercicios de clases y objetos

###Punto 1
> ####Crear una clase de Auto con los atributos (marca, modelo, potencia, max. velocidad)
- Crear 5 autos - en un array
- Iterar el array y mostrar los autos por pantalla
- Iteramos los autos y calculamos con un método (calcular tiempo) cuanto tarda en forma óptima en recorrer x kms
- Hacer casos de prueba

![Punto 1](https://raw.githubusercontent.com/NicolasCatalanoIES/Ejercicio2/main/img/Punto1.PNG)

---
###Punto 2
> ####Crear una clase Escuela (1) que tiene un listado de Cursos (2) al cual se le asignan Alumnos (2)

![Punto 2](https://raw.githubusercontent.com/NicolasCatalanoIES/Ejercicio2/main/img/Punto2.PNG)

---

###Punto 3
> ####Crear una clase Cuenta Bancaria a la cual le podemos asignar fondos y sacar fondos
- Si le asignamos más de 500000 disparamos una alarma
- Si intentamos sacar más de lo que disponemos disparamos otra alarma
- Si intentamos sacar más de 100000 disparamos otra alarma

![Punto 3](https://raw.githubusercontent.com/NicolasCatalanoIES/Ejercicio2/main/img/Punto3.PNG)


Para correr el programa primero instalar las dependecia con :
```bash
$ npm install
```
Para largar las pruebas unitarias escribir en la terminal:
```bash
$ npm t
```
Para ejecutar cada punto puede dirigirse a la carpeta de cada punto y ejecutar el siguiente comando: 
```bash
$ node app.js
```
Tambien puede ejecutar a traves de [nodemon](https://www.npmjs.com/package/nodemon "nodemon") con el siguiente comando:
```bash
$ npm run dev
```
El último comando solo ejecutara el **Punto 3** , si desea cambiar esta configuración debe dirigirse al archivo **package.json** y cambiar el número del punto deseado en la linea 10 de dicho archivo.
```js
{
  "scripts": {
    "dev": "nodemon Punto3/app"}
}
```