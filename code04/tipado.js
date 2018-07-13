//Tipos de datos primitivos
//String
var mensaje;
mensaje = "Hola mundo";
// Number
var numero;
numero = 9.5;
// Boolean
var booleano;
booleano = true;
// Array
var frutas;
var coches;
coches = ["Renault", "Opel", "Mercedes"];
// Any ("eliminar la inferencia")
var edad = 35;
edad = 'Cuarenta';
// Enum
var TallaPantalon;
(function (TallaPantalon) {
    TallaPantalon[TallaPantalon["small"] = 0] = "small";
    TallaPantalon[TallaPantalon["medium"] = 1] = "medium";
    TallaPantalon[TallaPantalon["large"] = 2] = "large";
})(TallaPantalon || (TallaPantalon = {}));
;
var pantalon = TallaPantalon.small; // devolverá cero (por ser la primera posición del enum)
var TallaZapato;
(function (TallaZapato) {
    TallaZapato[TallaZapato["uk5"] = 43] = "uk5";
    TallaZapato[TallaZapato["uk6"] = 45] = "uk6";
})(TallaZapato || (TallaZapato = {}));
;
var zapatilla = TallaZapato.uk5; // devolverá 43
// Void
function saludo() {
    console.log("Hola mundo");
}
var variable = undefined;
variable = null;
// Tipado de objetos
var jugador;
jugador = { nombre: 'Cristiano', apellidos: 'Ronaldo' };
var jugador2;
jugador2 = { nombre: 'Cristiano', edad: 40 };
// Tipos de unión
var fechaNacimiento;
fechaNacimiento = 12;
var referencia;
referencia = "dsodij208313u8";
referencia = 31938;
var toby = 'Dogo';
// Tipos de funciones
function suma(a, b) {
    return a + b;
}
suma(2, 2);
// Parámetros opcionales
function multiplicacion(a, b, mensaje) {
    var resultado = a * b;
    if (mensaje) {
        return mensaje + resultado;
    }
    else {
        return "Este es el resultado: " + resultado;
    }
}
multiplicacion(2, 4, 'Puntuación: '); // Devuelve -> Puntuación: 8
multiplicacion(2, 4); // Devuelve -> Este es el resultado: 8
// Tipos genéricos ("el tipo se definirá en tiempo de ejecución")
function devueleResultado(a) {
    return a;
}
devueleResultado('Hola mundo');
devueleResultado(12);
