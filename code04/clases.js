"use strict";
exports.__esModule = true;
var Jugador = /** @class */ (function () {
    function Jugador(nombre, dorsal) {
        this.goles = 0;
        this.nombre = nombre;
        this.dorsal = dorsal;
    }
    Jugador.prototype.marcarGol = function () {
        this.goles++;
    };
    return Jugador;
}());
var jugador1 = new Jugador('Cristiano', 7);
jugador1.marcarGol();
console.log("Numero de goles: " + jugador1.goles);
// Método simplificado. Si todas las propiedades las metemos en el constructor, no hace falta declararlas previamente
var Player = /** @class */ (function () {
    function Player(nombre, dorsal, goles) {
        this.nombre = nombre;
        this.dorsal = dorsal;
        this.goles = goles;
        this.nombre = nombre;
        this.dorsal = dorsal;
        this.goles = goles ? goles : 0;
    }
    Player.prototype.marcarGol = function () {
        this.goles++;
    };
    return Player;
}());
var jugador2 = new Player('David de Gea', 1);
jugador2.goles = 10;
// Módulos
var default_1 = /** @class */ (function () {
    function default_1() {
    }
    return default_1;
}());
