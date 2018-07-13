class Jugador{
    public nombre: string;
    public dorsal: number;
    public goles: number = 0;
    
    constructor (nombre:string, dorsal:number){
        this.nombre = nombre;
        this.dorsal = dorsal;
    }
    marcarGol(): void{
        this.goles++;
    }
}

let jugador1 = new Jugador('Cristiano', 7);
jugador1.marcarGol();
console.log("Numero de goles: " + jugador1.goles);

// Constructor breve. Si todas las propiedades las metemos en el constructor, no hace falta declararlas previamente
class Player {
    constructor(public nombre:string, public dorsal:number, public goles?:number){
        this.nombre=nombre;
        this.dorsal=dorsal;
        this.goles=goles?goles:0;
    }
    marcarGol(): void{
        this.goles++;
    }
}
let jugador2 = new Player('David de Gea', 1);
jugador2.goles=10;

// Módulos
export class Empleado{
    public nombre:string;
    public departamento:string;
    constructor(nombre:string, departamento:string){
        this.nombre=nombre;
        this.departamento=departamento;
    }
}
