import { Direccion } from "./Direccion";
import { mail } from "./Mail";
import { Telefono } from "./Telefono";

export class Persona {
   _nombre: string;
   _apellidos: string;
   _edad: number;
   _dni: string;
   _cumpleaños: string;
   _colorfavorito: string;
   _sexo: string;
   _direccion: Direccion;
   _telefonos: Telefono[];
   _mail: mail[];
   _notas: string;


  public get edad(): number {
    return this._edad;
  }



  public set edad(value: number) {
    this._edad = value;
  }

  public get apellido(): string {
    return this._apellidos;
  }


  public set apellido(value: string) {
    this._apellidos = value;
  }

  constructor(nombre: string, apellidos: string, dni: string, edad: number, cumpleaños: string, colorfavorito: string, sexo: string, notas: string, direccion: Direccion, telefonos: Telefono[], mail: mail[]) {
    this._nombre = nombre;
    this._apellidos = apellidos;
    this._dni = dni;
    this._direccion = direccion;
    this._telefonos = telefonos;
    this._mail = mail;
    this._colorfavorito = colorfavorito;
    this._edad = edad;
    this._cumpleaños = cumpleaños;
    this._sexo = sexo;
    this._notas = notas;


  }

  

  modificarDatos(direccion: Direccion, telefonos: Telefono[], mail: mail[]): void {
    this._direccion = direccion;
    this._telefonos = telefonos;
    this._mail = mail;
  }

  public get nombre(): string {
    return this._nombre;
  }


  public set nombre(value: string) {
    this._nombre = value;
  }

  getDatos(): string {
    let datos: string = ` ${this._nombre}, ${this._apellidos}, ${this._dni}, ${this._direccion.getDireccion()},`;
    this._telefonos.forEach((telefono) => {
      datos += `  - ${telefono.getTelefono()}`;
    });
    this._mail.forEach((mail) => {
      datos += `  - ${mail.getMail()}\n`;
    });
    return datos;
  }

}




