"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
// Clase y selección de tipos.
var Mail = /** @class */ (function () {
    function Mail(tipo, direccion) {
        this.tipo = tipo;
        this.direccion = direccion;
    }
    // Funciones para el acceso a los atributos.
    Mail.prototype.getTipo = function () {
        return this.tipo;
    };
    Mail.prototype.getDireccion = function () {
        return this.direccion;
    };
    return Mail;
}());
exports.Mail = Mail;
