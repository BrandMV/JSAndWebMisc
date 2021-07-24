// let personH = new Person('Nombre', 'Apellido', 'Edad') cannot access 'Person' before initialization no se puede hacer

class Person{

    static personObjectsCounter = 0 //atributo que se asocia con la clase, estatico
    email = 'default@email.com' //atributo que se asocia con el objeto, no estatico

    constructor(name, lastName, age){
        this._name = name
        this._lastName = lastName
        this._age = age
        Person.personObjectsCounter++
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
        return this._name + ' ' + this._lastName
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

let person1 = new Person('Brandon', 'Meza', 20)
console.log(person1.name); //get nombre
console.log(person1);
person1.name = 'David' //set nombre('David')
console.log(person1);

// person1.greet()  no es posible llamar un metodo estatico desde un objetto
Person.greet()
Person.greet2(person1)
//al metodo estatico se pueden reciobir objetos como parametros

let person2  = new Person("Jonathan", "Hernandez", 19)
console.log(person2);

//En las clases no hay Hoisting

//Herencia

class Employee extends Person{

    constructor(name, lastName, age, department){
        super(name, lastName, age)
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

let employee1 = new Employee('Jonathan', 'Hernandez', 20, 'Sistemas')
console.log(employee1);
console.log(employee1.fullName())
console.log(employee1.name);
employee1.name = 'Nahomi'
console.log(employee1.name);
console.log(employee1.toString());
console.log(person1.toString());
//las clases heredan de la clase Objeto, por lo tanto funcionan como objeto
//polimorfismo: mandamos a llamar un metodo dependiento a que clase hagamos referencia, ya sea al padre o al hijo, permite ejecutar el metodo de la clase padre o hija en tiempo de jecucion

Employee.greet2(employee1)
//no podemos acceder a atribuos estaticos a traves de un objeto
console.log(Person.personObjectsCounter) //imprimiendo un atributo estatico de la clase
console.log(Employee.personObjectsCounter);
console.log(person1.email);