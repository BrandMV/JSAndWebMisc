//un decorador permite agregar funcionalidad sin modificar la clase a la que queremos decorar, usamos el simbolo @
//es muy usado en angular, lo podemos aplicar a metodos, atributos y clases


function Greetings(target: Function): void{
    target.prototype.saludos = function(): void{
        console.log("Hola desde decoradores");
        
    }
}

@Greetings
class Hola{
    constructor(){}
}

let hola1 = new Hola()
hola1.saludos()