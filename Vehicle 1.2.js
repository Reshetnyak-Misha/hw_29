function Vehicle(type) {
    this.type = type;
}

Vehicle.prototype.start = () => {
    console.log('Машина начала движение');
};
Vehicle.prototype.stop = () => {
    console.log('Машина остановилась');
};

function Car(brand) {
    this.brand = brand;
}

Object.setPrototypeOf(Car.prototype, Vehicle.prototype);

Car.prototype.drive = ()=> {
    console.log('Едем по дороге');
};

Car.prototype.parking = ()=> {
    console.log('Припарковался');
};

function Truck(brand) {
    this.brand = brand;
}

Object.setPrototypeOf(Truck.prototype, Car.prototype);

Truck.prototype.loaded = () => {
    console.log('Загрузился');
}

function Sedan(brand) {
    this.brand = brand;
}

Object.setPrototypeOf(Sedan.prototype, Car.prototype);

Sedan.prototype.comfortDrive = () => {
    console.log('Комфорт на седане');
}


Vehicle.prototype.start = () => {
    console.log('Мотоцикл начал движение');
}
Vehicle.prototype.stop = () => {
    console.log('Мотоцикл остановился');
}

function Bike(brand) {
    this.brand = brand;
}

Object.setPrototypeOf(Bike.prototype, Vehicle.prototype);

Bike.prototype.ride = () => {
    console.log('Велик катится');
}
Bike.prototype.parkingBike = () => {
    console.log('Велик поставил');
}

function SportBike(brand) {
    this.brand = brand;
}

Object.setPrototypeOf(SportBike.prototype, Bike.prototype);

SportBike.prototype.highSpeed = () => {
    console.log('Летим на мотоцикле');
}

function Scooter(brand) {
    this.brand = brand;
}

Object.setPrototypeOf(Scooter.prototype, Bike.prototype);

SportBike.prototype.anywhereParking = () => {
    console.log('Стал где попало');
}


const volvo = new Sedan("volvo");
const bmw = new SportBike('bmw')


volvo.start();
volvo.drive();
volvo.parking();
volvo.comfortDrive();

console.log(`------------------------`)

bmw.ride();
bmw.parkingBike();
bmw.highSpeed();
bmw.anywhereParking();




