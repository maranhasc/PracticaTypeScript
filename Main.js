"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Direccion_1 = require("./Direccion");
var Mail_1 = require("./Mail");
var Telefono_1 = require("./Telefono");
var Persona_1 = require("./Persona");
//Definimos las direcciones como constantes
var direccion1 = new Direccion_1.Direccion("Calle uno", 1, 4, "Letra1", 11111, "Madrid", "Madrid");
var direccion2 = new Direccion_1.Direccion("Calle dos", 2, 5, "Letra2", 22222, "Toledo", "Toledo");
var direccion3 = new Direccion_1.Direccion("Calle tres", 3, 6, "Letra3", 33333, "Cordoba", "Cordoba");
//Definimos los mails como constantes tambien
var mail1 = new Mail_1.mail("mail1", "gmail");
var mail2 = new Mail_1.mail("mail2", "hotmail");
var mail3 = new Mail_1.mail("mail3", "outlook");
//Definimos los telefonos
var Telefono1 = new Telefono_1.Telefono("111111111", "fijo");
var Telefono2 = new Telefono_1.Telefono("222222222", "fijo");
var Telefono3 = new Telefono_1.Telefono("333333333", "movil");
//Definimos las personas
var Persona1 = new Persona_1.Persona("Carla", "Gonzalez", "11111111A", 11, "1/1/01", "Rojo", "Femenino", "notas1", direccion1, [Telefono1], [mail1]);
var Persona2 = new Persona_1.Persona("Carlos", "Martinez", "22222222A", 22, "2/2/02", "Azul", "Masculino", "notas2", direccion2, [Telefono2], [mail2]);
var Persona3 = new Persona_1.Persona("Adrian", "Lopez", "33333333A", 33, "3/3/03", "Amarillo", "Nasculino", "notas3", direccion3, [Telefono3], [mail3]);
console.log("Datos Persona 1:", Persona1.getDatos());
console.log("Datos Persona 2:", Persona2.getDatos());
console.log("Datos Persona 3:", Persona3.getDatos());
//Buscar DNI
var busquedaDni = "33333333A";
if (Persona1._dni == busquedaDni) {
    var newdireccion = new Direccion_1.Direccion("calle4", 7, 8, "Letra4", 44444, "Valencia", "Valencia");
    var newtelefono = new Telefono_1.Telefono("444444444", "movil");
    var newmail = new Mail_1.mail("mail4", "gmail");
}
else if (Persona2._dni == busquedaDni) {
    var newdireccion = new Direccion_1.Direccion("calle4", 7, 8, "Letra4", 44444, "Valencia", "Valencia");
    var newtelefono = new Telefono_1.Telefono("444444444", "movil");
    var newmail = new Mail_1.mail("mail4", "gmail");
}
else {
    var newdireccion = new Direccion_1.Direccion("calle4", 7, 8, "Letra4", 44444, "Valencia", "Valencia");
    var newtelefono = new Telefono_1.Telefono("444444444", "movil");
    var newmail = new Mail_1.mail("mail4", "gmail");
}
//Datos nuevos
console.log("Datos actualizados persona1:", Persona1.getDatos());
console.log("Datos actualizados persona2:", Persona2.getDatos());
console.log("Datos actualizados persona3:", Persona3.getDatos());
