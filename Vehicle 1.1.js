
const vehicle = {
    start () {
        console.log('Завёлся');
    }, stop () {
        console.log('Стоим');
    }
};

const car = {
    drive () {
        console.log('Едем по дороге');
    }, parking () {
        console.log('Припарковался');
    }
};

// car.__proto__ = vehicle;
Object.setPrototypeOf(car,vehicle);

const truck = {
    loaded () {
        console.log('Загрузился');
    }
};

// truck.__proto__ = car;
Object.setPrototypeOf(truck,car);

const sedan = {
    comfortDrive () {
        console.log('Комфорт на седане');
    }
};

// sedan.__proto__ = car;
Object.setPrototypeOf(sedan,car);

const bike = {
    ride () {
        console.log('Велик катится');
    }, parkingBike () {
        console.log('Велик поставил');
    }
};

// bike.__proto__ = vehicle;
Object.setPrototypeOf(bike,vehicle);


const sportBike = {
    highSpeed () {
        console.log('Летим на мотоцикле');
    }
};

sportBike.__proto__ = bike;
Object.setPrototypeOf(sportBike,bike);


const scooter = {
    anywhereParking () {
        console.log('Стал где попало');
    }
};

scooter.__proto__ = bike;
Object.setPrototypeOf(scooter,bike);


car.start();
car.drive();
car.parking();
car.stop();

console.log(`------------------------`)

truck.start();
truck.loaded();
truck.drive();
truck.stop();

console.log(`------------------------`)

sedan.start();
sedan.comfortDrive();
sedan.drive();
sedan.stop();

console.log(`------------------------`)

bike.start();
bike.ride();
bike.stop();
bike.parkingBike();

console.log(`------------------------`)

sportBike.start();
sportBike.ride();
sportBike.highSpeed();
sportBike.stop();

console.log(`------------------------`)

scooter.start();
scooter.ride();
scooter.anywhereParking();
scooter.stop();
