"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellidos, dni, edad, cumpleaños, colorfavorito, sexo, notas, direccion, telefonos, mail) {
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
    Object.defineProperty(Persona.prototype, "edad", {
        get: function () {
            return this._edad;
        },
        set: function (value) {
            this._edad = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "apellido", {
        get: function () {
            return this._apellidos;
        },
        set: function (value) {
            this._apellidos = value;
        },
        enumerable: false,
        configurable: true
    });
    Persona.prototype.modificarDatos = function (direccion, telefonos, mail) {
        this._direccion = direccion;
        this._telefonos = telefonos;
        this._mail = mail;
    };
    Object.defineProperty(Persona.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (value) {
            this._nombre = value;
        },
        enumerable: false,
        configurable: true
    });
    Persona.prototype.getDatos = function () {
        var datos = " ".concat(this._nombre, ", ").concat(this._apellidos, ", ").concat(this._dni, ", ").concat(this._direccion.getDireccion(), ",");
        this._telefonos.forEach(function (telefono) {
            datos += "  - ".concat(telefono.getTelefono());
        });
        this._mail.forEach(function (mail) {
            datos += "  - ".concat(mail.getMail(), "\n");
        });
        return datos;
    };
    return Persona;
}());
exports.Persona = Persona;
