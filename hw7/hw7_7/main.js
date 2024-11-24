class Car {
    constructor(model, producer, year, maxSpeed,volume){
        this.model=model;
        this.producer=producer;
        this.year=year;
        this.maxSpeed=maxSpeed;
        this.volume=volume;

        this.drive=function () {
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
        };
        this.info=function () {
            for (const key in this) {
                console.log(key, this[key]);

            }}

        this.increaseMaxSpeed = function (newSpeed) {
            if (newSpeed > 0) this.maxSpeed = this.maxSpeed + newSpeed;
        }

        this.changeYear=function (newValue) {
            if (newValue>0)this.year=newValue;
        };
        this.addDriver=function (driver) {
            if (driver)this.driver=driver;
        }}
}
let car=new Car('audi','Germany',2002,200,5);

car.drive();
car.info();
car.changeYear();
car.addDriver();
car.increaseMaxSpeed(30);
console.log(car);