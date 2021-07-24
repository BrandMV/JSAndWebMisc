//static

class Person{

    static peopleCounter = 0 //atributo que se asocia con la clase, estatico

    //simulando una constante de tipo static
    static get MAX_OBJ(){
        return 5
    }

    constructor(name, lastName){
        this._name = name
        this._lastName = lastName
        Person.peopleCounter < Person.MAX_OBJ ? this.id = Person.peopleCounter++ : console.log('Max People reached');
    }

    get name(){
        return this._name
    }

    set name(name){
        this._name = name
    }

    get lastName(){
        return this.lastName
    }

    set lastName(lastName){
        this._lastName = lastName
    }

    get age(){
        return this.lastName
    }

    set age(age){
        this._age = age
    }

    fullName(){
        return this.id + ' ' + this._name + ' ' + this._lastName
    }
    //sobreescribimos el metodo toString de la clase padre (Object)
    toString(){
        return this.fullName()
    }

    static greet(){
        console.log('Greetings you all');
    } //un metodo estatico se asocia con la clase, pero no con los objetos, los usamos desde la clase misma
    static greet2(person){
        console.log(person.name);
    }
}

class Employee extends Person{

    constructor(name, lastName, department){
        super(name, lastName)
        this._department = department 

    }
    get department(){
        return this._department
    }

    set department(department){
        this._department = department
    }

    //sobreescritura; modificar comportamiento de un metodo de la clase padre
    fullName(){
        return super.fullName() + ', ' + this._department
    }

}


let person1 = new Person('Brandon', 'Meza')
console.log(person1.toString());

let employee1 = new Employee('Jonathan', 'Hernandez', 'Sistemas')
console.log(employee1.toString());

let person2 = new Person('David', 'Meza')
console.log(person2.toString());

console.log(Person.peopleCounter);

console.log(Person.MAX_OBJ);
Person.MAX_OBJ = 10 //como no definimos un metodo set no se modifica
console.log(Person.MAX_OBJ);

let person3 = new Person('Brandon', 'Meza')
let person4 = new Person('Brandon', 'Meza')
let person5 = new Person('Brandon', 'Meza')
console.log(person4.toString());



