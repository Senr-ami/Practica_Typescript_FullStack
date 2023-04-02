"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
// Clase y selección de tipos.
var Direccion = /** @class */ (function () {
    function Direccion(calle, numero, piso, letra, codigopostal, poblacion, provincia) {
        this.calle = calle;
        this.numero = numero;
        this.piso = piso;
        this.letra = letra;
        this.codigopostal = codigopostal;
        this.poblacion = poblacion;
        this.provincia = provincia;
    }
    // Funciones para el acceso a los atributos.
    Direccion.prototype.getCalle = function () {
        return this.calle;
    };
    Direccion.prototype.getNumero = function () {
        return this.numero;
    };
    Direccion.prototype.getPiso = function () {
        return this.piso;
    };
    Direccion.prototype.getLetra = function () {
        return this.letra;
    };
    Direccion.prototype.getCodigopostal = function () {
        return this.codigopostal;
    };
    Direccion.prototype.getPoblacion = function () {
        return this.poblacion;
    };
    Direccion.prototype.getProvincia = function () {
        return this.provincia;
    };
    return Direccion;
}());
exports.Direccion = Direccion;
