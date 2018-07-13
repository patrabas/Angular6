//Tipos de datos primitivos

//String
let mensaje: string;
mensaje = "Hola mundo";
// Number
let numero: number;
numero = 9.5;
// Boolean
let booleano: boolean;
booleano = true;
// Array
let frutas: string[];
let coches: Array<string>;
coches = ["Renault", "Opel", "Mercedes"];
// Any ("eliminar la inferencia")
let edad: any = 35;
edad = 'Cuarenta';
// Enum
enum TallaPantalon {small, medium, large};
let pantalon: TallaPantalon = TallaPantalon.small; // devolverá cero (por ser la primera posición del enum)
enum TallaZapato {uk5=43, uk6=45};
let zapatilla: TallaZapato = TallaZapato.uk5; // devolverá 43
// Void
function saludo(){
    console.log("Hola mundo");
}
let variable: void = undefined;
variable = null;
// Tipado de objetos
let jugador: object;
jugador = {nombre: 'Cristiano', apellidos: 'Ronaldo'};
let jugador2: {nombre: string, edad: number};
jugador2 = {nombre: 'Cristiano', edad: 40};
// Tipos de unión
let fechaNacimiento: number | string;
fechaNacimiento = 12;
type id = string | number;
let referencia: id;
referencia = "dsodij208313u8";
referencia = 31938;
// Tipos de unión complejos
type perro = 'Pastor Alemán' | 'Dogo' | 'Mastín';
let toby: perro = 'Dogo';
// Tipos de funciones
function suma(a:number, b:number): number{
    return a+b;
}
suma(2,2);
// Parámetros opcionales
function multiplicacion(a:number, b:number, mensaje?:string):string{
    let resultado = a*b;
    if(mensaje){
        return mensaje + resultado;
    }else{
        return `Este es el resultado: ${resultado}`;
    }
}
multiplicacion(2,4,'Puntuación: '); // Devuelve -> Puntuación: 8
multiplicacion(2,4); // Devuelve -> Este es el resultado: 8
// Tipos genéricos ("el tipo se definirá en tiempo de ejecución")
function devueleResultado<T>(a:T):T{
    return a;
}
devueleResultado<string>('Hola mundo');
devueleResultado<number>(12);