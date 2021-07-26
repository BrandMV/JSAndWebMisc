"use strict";
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    //para accedeer a aatributos privadis
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.staticMethod = function () {
        return 10;
    };
    return Person;
}());
var person1 = new Person("Pedro", 20);
console.log(person1.getName());
console.log(person1.age);
console.log(Person.staticMethod());
