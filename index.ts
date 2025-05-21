// Интерфейс
interface ICar {
    fuel: string;
    open: boolean;
    freeSeats: number;
}

// Декоратор для установки состояния дверей (true - открыто, false - закрыто)
@changeDoorStatus(true)
@changeAmountOfFuel(95) // Декоратор для установки уровня топлива в процентах
// Класс машины, реализующий интерфейс ICar
class myCar implements ICar {
    fuel: string = "50%"; // Начальный уровень топлива (переопределяется декоратором)
    open: boolean = true; // Начальное состояние дверей (переопределяется декоратором)
    freeSeats: number;
    // Метод для проверки состояния дверей
    isOpen() {
        console.log(this.fuel); // Вывод текущего уровня топлива
        return this.open ? "open" : "close"; // Возврат состояния дверей ("open" или "close")
    }
}

// Декоратор для изменения состояния дверей
function changeDoorStatus(status: boolean) {
    console.log("door init"); // Сообщение при инициализации декоратора
    // Функция-декоратор принимает конструктор класса
    return <
        T extends {
            new (...args: any[]): {};
        }
    >(
        constructor: T
    ) => {
        console.log("door changed"); // Сообщение при применении декоратора
        // Возвращаем новый класс, расширяющий исходный
        return class extends constructor {
            open = status; // Устанавливаем новое состояние дверей
        };
    };
}

// Декоратор для изменения уровня топлива
function changeAmountOfFuel(amount: number) {
    console.log("fuel init"); // Сообщение при инициализации декоратора
    // Функция-декоратор принимает конструктор класса
    return <
        T extends {
            new (...args: any[]): {};
        }
    >(
        constructor: T
    ) => {
        console.log("fuel changed"); // Сообщение при применении декоратора
        // Возвращаем новый класс, расширяющий исходный
        return class extends constructor {
            fuel = `${amount}%`; // Устанавливаем новый уровень топлива
        };
    };
}

// Создание экземпляра класса myCar
const car = new myCar();

// Вызов метода isOpen для проверки состояния и вывода результата
console.log(car.isOpen());
