"use strict";
//un decorador permite agregar funcionalidad sin modificar la clase a la que queremos decorar, usamos el simbolo @
//es muy usado en angular, lo podemos aplicar a metodos, atributos y clases
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Greetings(target) {
    target.prototype.saludos = function () {
        console.log("Hola desde decoradores");
    };
}
var Hola = /** @class */ (function () {
    function Hola() {
    }
    Hola = __decorate([
        Greetings
    ], Hola);
    return Hola;
}());
var hola1 = new Hola();
hola1.saludos();
