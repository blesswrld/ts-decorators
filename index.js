"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Декоратор класса
let myCar = 
// Класс для декорации
class myCar {
    constructor() {
        this.fuel = "50%"; // Начальный уровень топлива
        this.open = true; // Начальное состояние дверей
    }
    isOpen() {
        console.log(this.fuel);
        return this.open ? "open" : "close";
    }
};
myCar = __decorate([
    closeCar
    // Класс для декорации
], myCar);
// Декоратор для закрытия машины
function closeCar(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.open = false;
        }
    };
}
// Декоратор для заправки машины
// function addFuel(car: myCar) {
//     car.fuel = "100%"; // Установка полного уровня топлива
//     console.log("add fuel");
//     return car; // Возврат измененного объекта
// }
// Новый экземпляр класса
const car = new myCar();
// Вызов метода isOpen
console.log(car.isOpen());
// Композиция
// Функция внутри - Функции
// f(x(y()));
