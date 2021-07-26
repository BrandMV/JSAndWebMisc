//tipo de dato que contiene atributos o ciertos metodos
interface User{
    userName: string
    password: string
    confirmPassword?:string// se usa ? para indicar que algo es opcional
}

let user1: User =  {userName: "BrandMV", password: "123"}

console.log(user1);
console.log(user1.userName);

interface Abordar{
    abordarTransporte(): void
}

let avion: Abordar = {
    abordarTransporte: function(){
        console.log("Abordando");
        
    }
}

avion.abordarTransporte()
