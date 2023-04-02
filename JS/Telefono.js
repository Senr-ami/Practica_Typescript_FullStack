"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefono = void 0;
// Clase y selección de tipos.
var Telefono = /** @class */ (function () {
    function Telefono(tipo, numero) {
        this.tipo = tipo;
        this.numero = numero;
    }
    // Funciones para el acceso a los atributos.
    Telefono.prototype.getTipo = function () {
        return this.tipo;
    };
    Telefono.prototype.getNumero = function () {
        return this.numero;
    };
    return Telefono;
}());
exports.Telefono = Telefono;
