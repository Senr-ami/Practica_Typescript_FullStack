"use strict";
// Creación del main importando las clases anteriores.
Object.defineProperty(exports, "__esModule", { value: true });
var Persona_1 = require("./Persona");
var Direccion_1 = require("./Direccion");
var Telefono_1 = require("./Telefono");
var Mail_1 = require("./Mail");
// Creación direcciones
var direccion1 = new Direccion_1.Direccion("Calle Falsa", 123, 4, "A", 65211, "Getafe", "Madrid");
var direccion2 = new Direccion_1.Direccion("Avenida Silvestre", 456, 2, "B", 64235, "Nerja", "Málaga");
var direccion3 = new Direccion_1.Direccion("Calle del Reposo", 789, 1, "C", 34621, "Vícar", "Almería");
// Creación teléfonos
var telefono1 = new Telefono_1.Telefono("Trabajo", 631568932);
var telefono2 = new Telefono_1.Telefono("Casa", 999555666);
var telefono3 = new Telefono_1.Telefono("Casa", 956412312);
var telefono4 = new Telefono_1.Telefono("Personal", 612564756);
var telefono5 = new Telefono_1.Telefono("Trabajo", 956412645);
var telefono6 = new Telefono_1.Telefono("Casa", 954564561);
// Creación mails
var mail1 = new Mail_1.Mail("Trabajo", "jajasaludos@gmail.com");
var mail2 = new Mail_1.Mail("Personal", "ajugar@games.com");
var mail3 = new Mail_1.Mail("Empresa", "viajes@elcorteingles.com");
// Creación personas
var Manuel = new Persona_1.Persona("Manuel", "Lopez Gomez", 35, "52520529Y", new Date(1987, 5, 9), "Rojo", "Hombre", [direccion1], [mail1], [telefono1, telefono2], "Notas de Manuel");
var María = new Persona_1.Persona("María", "Nieves Peralta", 44, "58489890Q", new Date(1968, 6, 15), "Amarillo", "Mujer", [direccion2], [mail2], [telefono3, telefono4], "Notas de María");
var Rubén = new Persona_1.Persona("Rubén", "Gutierrez Torres", 46, "69096946R", new Date(1964, 5, 5), "Negro", "Hombre", [direccion3], [mail3], [telefono5, telefono6], "Notas de Rubén");
// Resultados en terminal 1.0
console.log("Información de personas:");
console.log(Manuel);
console.log(María);
console.log(Rubén);
// Búsqueda mediante DNI
var buscarDni = "58489890Q";
var agenda = new Array(Manuel, María, Rubén);
var editarPersona = agenda.find(function (persona) { return persona.dni === buscarDni; });
// Datos nuevos
var direccionNueva = new Direccion_1.Direccion("Calle más falsa", 58, 6, "G", 65481, "Badalona", "Barcelona");
var mailNuevo = new Mail_1.Mail("Personal", "semeolvido@gmail.com");
var telefonoNuevo = new Telefono_1.Telefono("Trabajo", 931256842);
// Añadiendo datos nuevos
editarPersona.nuevaDireccion(direccionNueva);
editarPersona.nuevoTelefono(telefonoNuevo);
editarPersona.nuevoMail(mailNuevo);
// Resultados terminal 2.0
console.log("Información de personas actualizada:");
console.log(Manuel);
console.log(María);
console.log(Rubén);
