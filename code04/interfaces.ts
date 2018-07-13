interface Jugador{
    nombre: string;
    edad: number;
}
let jugador1: Jugador;
jugador1 = {
    nombre: 'Sergio', 
    edad: 40
}
// En la declaración literal del objeto solo se pueden usar propiedades conocidas
let jugador2: Jugador = {
    nombre: 'Lionel Messi',
    edad: 30,
    //goles: 22
}
// Propiedades opcionales
interface Equipo {
    tipo: string;
    marca: string;
    precioEuros?: number 
}
let equipo1: Equipo = {
    tipo: "PC",
    marca: "Asus",
    //precioEuros: 1000
}