//la clase hija tiene su propio conportameinto de un meotodo heredado

class Employee{
    constructor(name, income){
        this._name = name
        this._income = income
    }

    get name(){
        return this._name
    }
    set name(name){
        this._name = name
    }

    getDetails(){
        return `Employee: Name: ${this._name}, Income: $${this._income}`
    }
}

let employee1 = new Employee('Juan', 4000)
class Manager extends Employee{
    constructor(name, income, department){
        super(name, income)
        this._department = department
    }

    get department(){
        return this._department
    }

    getDetails(){
        return `Manager: ${super.getDetails()} + , Department: ${this._department}`
    }
}
let manager1 = new Manager('Brandon', 10000, 'Systems')

let determineType = (tipo) => {
    console.log(tipo.getDetails()) //aplicando polimorfismo
    if(tipo instanceof Manager){
        console.log('You are an manager');
        console.log(tipo.department);
    }
    else if(tipo instanceof Employee)
        console.log('You are a employee');
    else if(tipo instanceof Object)
        console.log('It´s an object');
}

determineType(employee1) //refrencia tpo empleado
determineType(manager1) //referencia tipo gerente

//polimorfismo_ multiples formas; mandamod a llamar un metodo de la clase padre o clase hija en una linea de codigo dependiendo el tipo
//para instanceof se recomienda poner primero la clase de menor jerarquia (hijos)

