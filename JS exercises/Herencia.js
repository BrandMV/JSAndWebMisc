class Person{
    static peopleCounter = 0
    
    constructor(name, lastName, age){
        this._id = ++Person.peopleCounter
        this._name = name
        this._lastName = lastName
        this._age = age
    }

    get id(){
        return this._id
    }

    get name(){
        return this._name
    }

    get lastName(){
        return this._lastName
    }

    get age(){
        return this._age
    }

    set name(name){
        this._name = name
    }

    set lastName(lastName){
        this._lastName = lastName
    }

    set age(age){
        this._age = age
    }

    toString(){
        return 'ID: ' + this._id + ' ' + this._name + ' ' + this._lastName + ', ' + this._age
    } 

}

class Employee extends Person{

    static employeeCounter = 0

    constructor(name, lastName, age, salary){
        super(name, lastName, age)
        this._employeeID = ++Employee.employeeCounter
        this._salary = salary
    }

    get employeeID(){
        return this._employeeID
    }

    get salary(){
        return this._salary
    }

    set salary(salary){
        this._salary = salary
    }

    toString(){
        return super.toString() + ' salario: ' + this._salary + ' ID empleado: ' + this._employeeID
    }
}

class Client extends Person{
    static clientCounter = 0

    constructor(name, lastName, age, registerDate){
        super(name, lastName, age)
        this._clientID = ++Client.clientCounter
        this._registerDate = registerDate
    }

    get clientID(){
        return this._clientID
    }

    get registerDate(){
        return this._registerDate
    }
    set registerDate(registerDate){
        this._registerDate = registerDate
    }
    toString(){
        return super.toString() + ' ID cliente: ' + this._clientID + ' fecha de registro: ' + this._registerDate
    }
}

//Person class

let person1 = new Person('Brandon', 'Meza', 20)
console.log(person1.toString());

let employee1 = new Employee('David', 'Vargas', 18, 2500)
console.log(employee1.toString());

let client1 = new Client('Lizeth', 'Rodriguez', 19, new Date())
console.log(client1.toString());