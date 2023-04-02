"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
// Clase y selección de tipos.
var Persona = /** @class */ (function () {
    function Persona(nombre, apellidos, edad, dni, cumpleaños, colorFavorito, sexo, direcciones, mails, telefonos, notas) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.dni = dni;
        this.cumpleaños = cumpleaños;
        this.colorFavorito = colorFavorito;
        this.sexo = sexo;
        this.direcciones = direcciones;
        this.mails = mails;
        this.telefonos = telefonos;
        this.notas = notas;
    }
    // Funciones para el acceso a los atributos.
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.getApellidos = function () {
        return this.apellidos;
    };
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    Persona.prototype.getDni = function () {
        return this.dni;
    };
    Persona.prototype.getCumpleaños = function () {
        return this.cumpleaños;
    };
    Persona.prototype.getColorFavorito = function () {
        return this.colorFavorito;
    };
    Persona.prototype.getSexo = function () {
        return this.sexo;
    };
    Persona.prototype.getDirecciones = function () {
        return this.direcciones;
    };
    Persona.prototype.getMails = function () {
        return this.mails;
    };
    Persona.prototype.getTelefonos = function () {
        return this.telefonos;
    };
    Persona.prototype.getNotas = function () {
        return this.notas;
    };
    // Nuevos datos
    Persona.prototype.nuevaDireccion = function (direccion) {
        this.direcciones.push(direccion);
    };
    Persona.prototype.nuevoTelefono = function (telefono) {
        this.telefonos.push(telefono);
    };
    Persona.prototype.nuevoMail = function (mail) {
        this.mails.push(mail);
    };
    return Persona;
}());
exports.Persona = Persona;
