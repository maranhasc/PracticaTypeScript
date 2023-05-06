import { Direccion } from "./Direccion";
import { mail } from "./Mail";
import { Telefono } from "./Telefono";
import { Persona } from "./Persona";


//Definimos las direcciones como constantes
const direccion1 = new Direccion("Calle uno",1,4,"Letra1",11111,"Madrid","Madrid");
const direccion2 = new Direccion("Calle dos",2,5,"Letra2",22222,"Toledo","Toledo");
const direccion3 = new Direccion("Calle tres",3,6,"Letra3",33333,"Cordoba","Cordoba");

//Definimos los mails como constantes tambien
const mail1 = new mail("mail1","gmail");
const mail2 = new mail("mail2","hotmail");
const mail3 = new mail("mail3","outlook");

//Definimos los telefonos
const Telefono1 = new Telefono("111111111","fijo");
const Telefono2 = new Telefono("222222222","fijo");
const Telefono3 = new Telefono("333333333","movil");

//Definimos las personas

const Persona1 = new Persona("Carla","Gonzalez","11111111A",11,"1/1/01","Rojo","Femenino","notas1",direccion1,[Telefono1],[mail1]);
const Persona2 = new Persona("Carlos","Martinez","22222222A",22,"2/2/02","Azul","Masculino","notas2",direccion2,[Telefono2],[mail2]);
const Persona3 = new Persona("Adrian","Lopez","33333333A",33,"3/3/03","Amarillo","Nasculino","notas3",direccion3,[Telefono3],[mail3]);

console.log("Datos Persona 1:",Persona1.getDatos());
console.log("Datos Persona 2:",Persona2.getDatos());
console.log("Datos Persona 3:",Persona3.getDatos());


//Buscar DNI

const busquedaDni = "33333333A";
if(Persona1._dni == busquedaDni){
    const newdireccion = new Direccion("calle4",7,8,"Letra4",44444,"Valencia","Valencia");
    const newtelefono = new Telefono("444444444","movil");
    const newmail = new mail("mail4","gmail");

}else if(Persona2._dni == busquedaDni){
    const newdireccion = new Direccion("calle4",7,8,"Letra4",44444,"Valencia","Valencia");
    const newtelefono = new Telefono("444444444","movil");
    const newmail = new mail("mail4","gmail");
}else{
    const newdireccion = new Direccion("calle4",7,8,"Letra4",44444,"Valencia","Valencia");
    const newtelefono = new Telefono("444444444","movil");
    const newmail = new mail("mail4","gmail");
}

//Datos nuevos

console.log("Datos actualizados persona1:", Persona1.getDatos());
console.log("Datos actualizados persona2:", Persona2.getDatos());
console.log("Datos actualizados persona3:", Persona3.getDatos());


