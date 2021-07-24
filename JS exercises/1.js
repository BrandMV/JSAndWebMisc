
let greeting = ["Brandon", "Meza"]

console.log(greeting);

greeting.map((d) => console.log(d+"yeah"))

let x = 5
let y = "5"

console.log(2+4 + "CARLOS" + (2+ 4) + 2 + 4);

//Even or Odd number

let n = 17

if (n % 2 == 0)
    console.log(n + " is an even number")
else 
    console.log(n + " is an odd number")

let res = n % 2 == 0 ? "even" : "odd"
console.log(res);

//age exercise

let age=20, age2=10

if(age > age2)
    console.log(age + " is higher than " + age2);
else if(age2 > age)
    console.log(age2 + " is higher than " + age);
    else    
        console.log("Ages are equal");

let ageRes = age >= 18 ? "Adult" : "under-age"
console.log(ageRes);

//Hoisting
/*
    JS pasa al inicio la declaracion de algo para que se pueda usar antes o despues de la declaracion
    cuando hay Hoistinh en let y const entran a la temporal dead zone
*/

console.log(w+z);

var w = 2
var z = 4


/*
    Temporal Dead Zone: zona de una varibale desde su declaracion hasta su inicializacion, let & const
*/
let factRes

const factorial = (n) => {
    if(n === 0)
        return 1
    return n * factorial(n-1)
}


console.log(factorial(8));

(function(){
    console.log("Me invoxo solita ay que miedo");
})() //ya no puede ser llamada en el futuro, detro de los () finales van los parametros

console.log(typeof factorial);

let funcionTexto = factorial.toString()
console.log(funcionTexto)
//las funciones son objetos

//Objetos

let address = "Una  direccion chida"

let person = {
    name: "Brandon",
    lastName: "Meza",
    age: 20,
    addres: address,
    email: "brandonmv2001@gmail.com",
    none: null,
    unde: undefined,
    plan: "free",
    //metodos en objetos
    premium: function(plan){
        if(this.plan === "premium") return true
        else return false
    },
    free: function(premium){
        if(!this.premium) return false
        else return true
    },
    fullName: function(){
        return this.name + ' ' +  this.lastName
    }
} 

person.alive = true

console.log(person);

console.log(person.premium(person.plan));
console.log(person.fullName());

let person2 = new Object()
// console.log(typeof person2)
person2.name = "Lizeth"
person2.lastName = "Rodriguez"
person2.age = 19

console.log(person2);
console.log(person2['lastName']);
console.log(person2['name']);

delete person2.age
console.log(person2);
//for in

for(p in person2){
    console.log(p);
    console.log(person2[p]);
    console.log(person2.p);
}

let arrayPerson= Object.values(person)
console.log(arrayPerson);

let stringPerson = JSON.stringify( person )
console.log(stringPerson);



//setter y getter en objetos

let person3 = {
    name: "Brandon",
    lastName: "Meza",
    age: 20,
    addres: address,
    email: "brandonmv2001@gmail.com",
    none: null,
    unde: undefined,
    plan: "free",
    lang: 'es_mx',
    get setLang(){
        return this.lang.toUpperCase()
    },
    //los sets se usan para modificar los valores de los params de nuestro objeto
    set setLang ( language ){
        this.lang = language.toUpperCase()
    },
    get fullName(){
        return this.name + ' ' +  this.lastName
    } //con get establecemos que será un metodo, al llamarlo ya no se invoca como funcion
} 
console.log(person3.fullName);
console.log(person3.setLang);

person3.setLang = 'en'
console.log(person3.lang);

//Constructores: funcion especial de objetos, inician con mayuscula

function Persona(name, lastName, age, email){
    this.name = name
    this.lastName = lastName
    this.age = age
    this.email = email
    this.fullName = () => {
        return this.name + ' ' + this.lastName
    }
}

Persona.prototype.tel = '5560906190' //se agrega la propiedad y valor a todos los objetos de tipo Persona
let padre = new Persona('Juan', 'perez', 45, 'padre@gmail.com',)
console.log(padre);
console.log(padre.fullName());
padre.name = "Carlos"
padre.tel = "5610690179"
console.log(padre);
let madre = new Persona('Mama', 'Mamasota', 55, 'mam@gmail.com')
console.log(madre);
console.log(madre.fullName());

// function myFunction(arr, n) {
//     let res = 0
//     arr.map((num) => {
//         if(num > n)
//             res += num        
//     })

//     return res
      
//  }


//  console.log( myFunction([1, 2, 3, 4, 5, 6, 7], 2));
let person4 = {
    name: "Brandon",
    lastName: "Meza",
    age: 20,
    fullName: function(titulo, tel){
        return titulo + ': ' + this.name + ' ' +  this.lastName + ', ' + tel
    } //con get establecemos que será un metodo, al llamarlo ya no se invoca como funcion
} 
let person5 = {
    name: "Brandon",
    lastName: "Vargas",
    age: 20,
} 

console.log(person4.fullName("Name", '5610690179'));

console.log(person4.fullName.call(person5, 'Ing', '55707577')); //con call podemos usar metodos de un objeto en otros
console.log(person4.fullName.apply(person5, ['Ing', '55707577'])); //con apply podemos usar metodos de un objeto en otros, los params se pasan con un arreglo