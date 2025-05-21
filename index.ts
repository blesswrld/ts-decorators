// Объект машины с начальными свойствами и методом
const myCar = {
    fuel: "50%", // Начальный уровень топлива
    open: true, // Начальное состояние дверей
    freeSeats: 3,
    isOpen() {
        console.log(this.fuel);
        return this.open ? "open" : "close";
    },
};

// Декоратор для закрытия машины
function closeCar(car: typeof myCar) {
    car.open = false; // Установка состояния дверей в "закрыто"
    console.log("close car");
    return car; // Возврат измененного объекта
}

// Декоратор для заправки машины
function addFuel(car: typeof myCar) {
    car.fuel = "100%"; // Установка полного уровня топлива
    console.log("add fuel");
    return car; // Возврат измененного объекта
}

// Выполнение декораторов и вызов метода isOpen
// Композиция: addFuel(closeCar(myCar)).isOpen()
addFuel(closeCar(myCar)).isOpen();

// Композиция
// Функция внутри - Функции
// f(x(y()));
