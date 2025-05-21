"use strict";
// Объект
const myCar = {
    fuel: "100%",
    open: true,
    freeSeats: 3,
    // Метод
    isOpen() {
        return this.open ? "open" : "close";
    },
};
// Decorator - Декоратор
// Для модификации объекта выше
function closeCar(car) {
    // Ставим значение open в false
    car.open = false;
    // Возвращаем машину с новым значением (декоратор)
    return car;
}
// Вывод в консоль
// Вызываем декоратор на объекте и метод его объекта isOpen()
console.log(closeCar(myCar).isOpen());
