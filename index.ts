// Интерфейс для машины
interface ICar {
    fuel: string; // Уровень топлива
    open: boolean; // Состояние дверей
    freeSeats: number; // Количество свободных мест
}

// Декоратор для закрытия машины
@closeCar
// Класс машины, реализующий интерфейс
class myCar implements ICar {
    fuel: string = "50%"; // Начальный уровень топлива
    open: boolean = true; // Начальное состояние дверей
    freeSeats: number;
    isOpen() {
        console.log(this.fuel);
        return this.open ? "open" : "close"; // Возврат состояния дверей
    }
}

// Декоратор для установки состояния дверей в "закрыто" в в виде generic
function closeCar<
    T extends {
        new (...args: any[]): {};
    }
>(constructor: T) {
    return class extends constructor {
        open = false; // Устанавливаем состояние дверей в "закрыто"
    };
}

// Создание нового экземпляра класса
const car = new myCar();

// Вызов метода isOpen
console.log(car.isOpen());
