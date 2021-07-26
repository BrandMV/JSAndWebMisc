
class Person{
    // private name : string; privado, por defecto es publico
    private name : string;
    age: number

    constructor(name: string, age: number){
        this.name = name;
        this.age = age
    }

    //para accedeer a aatributos privadis
    getName(): string{
        return this.name
    }

    static staticMethod(): number{
        return 10
    }
}

let person1 = new Person("Pedro", 20)
console.log(person1.getName());
console.log(person1.age);
console.log(Person.staticMethod());

