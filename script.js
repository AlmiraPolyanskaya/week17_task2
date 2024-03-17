//Объект
const data = [
    {
        id: 1,
        type: 'car',
        brand: 'Audi',
        doors: 4,
        price: 4300000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
        id: 2,
        type: 'car',
        brand: 'Mercedes-Benz',
        doors: 4,
        price: 2800000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
    },
    {
        id: 3,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 210,
        price: 1300000,
        image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
        id: 4,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 220,
        price: 1400000,
        image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
];

//- создать класс Transport, у него есть свойства: type, price, brand и два метода getInfo() и getPrice() ;
class Transport {
    constructor(type, brand, price) {
        this.type = type;
        this.brand = brand;
        this.price = price;
    }

    getInfo() {
        return ('Информация о транспорте: тип ' + this.type + ', бренд ' + this.brand);
    }

    getPrice() {
        return ('Информация о стоимости транспорта: ' + this.price);
    }
}

// - создать класс Car, который наследует от Transport. Этот класс должен содержать метод getDoorsCount() , который возвращает количество дверей;
class Car extends Transport {
    constructor(brand, price, doors) {
        super('car', brand, price);
        this.doors = doors;
    }

    getDoorsCount() {
        return ('Количество дверей: ' + this.doors);
    }
}

// - создать класс Bike, который наследует от Transport. Этот класс должен содержать метод getMaxSpeed(), который возвращает максимальную скорость мотоцикла.

class Bike extends Transport {
    constructor(brand, price, maxSpeed) {
        super('bike', brand, price);
        this.maxSpeed = maxSpeed;
    }

    getMaxSpeed() {
        return ('Максимальная скорость: ' + this.maxSpeed);
    }
}

// Проверка использования классов
const car1 = new Car('Пример бренда машины', 100, 4);
console.log(car1.getInfo());
console.log(car1.getPrice());
console.log(car1.getDoorsCount());

const bike1 = new Bike('Пример бренда мотоцикла', 50, 100);
console.log(bike1.getInfo());
console.log(bike1.getPrice());
console.log(bike1.getMaxSpeed());


//Использование массива data
data.forEach(item => {
    if (item.type === 'car') {
        const car = new Car(item.brand, item.price, item.doors);
        console.log(car.getInfo());
        console.log(car.getPrice());
        console.log(car.getDoorsCount());
    } else if (item.type === 'bike') {
        const bike = new Bike(item.brand, item.price, item.maxSpeed);
        console.log(bike.getInfo());
        console.log(bike.getPrice());
        console.log(bike.getMaxSpeed());
    }
});