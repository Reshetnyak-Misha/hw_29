
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

car.__proto__ = vehicle;

const truck = {
    loaded () {
        console.log('Загрузился');
    }
};

truck.__proto__ = car;

const sedan = {
    comfortDrive () {
        console.log('Комфорт на седане');
    }
};

sedan.__proto__ = car;

const bike = {
    ride () {
        console.log('Велик катится');
    }, parkingBike () {
        console.log('Велик поставил');
    }
};

bike.__proto__ = vehicle;

const sportBike = {
    highSpeed () {
        console.log('Летим на мотоцикле');
    }
};

sportBike.__proto__ = bike;

const scooter = {
    anywhereParking () {
        console.log('Стал где попало');
    }
};

scooter.__proto__ = bike;

car.start();
car.drive();
car.parking();
car.stop();

console.log(`------------------------`)

truck.start();
truck.loaded();
truck.stop();

console.log(`------------------------`)

sedan.start();
sedan.comfortDrive();
sedan.stop();

console.log(`------------------------`)

bike.start();
bike.ride();
bike.stop();
bike.parkingBike();

console.log(`------------------------`)

sportBike.start();
sportBike.highSpeed();
sportBike.stop();

console.log(`------------------------`)

scooter.start();
scooter.anywhereParking();
scooter.stop();
