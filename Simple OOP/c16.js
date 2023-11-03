class Tyre {
    constructor(brand, size) {
        this.brand = brand // property
        this.size = size // property

    }
}
class Car extends Tyre {
    constructor(brand, size, varian, door, seat, warranty, year, sn){
        super(brand, size)
        this.varian = varian;
        this.door = door;
        this.seat = seat;
        this.warranty = warranty;
        this.year = year;
        this.sn = sn;
    }
}

class Rush extends Car {}
class Agya extends Car {}

class CarFactory {
    constructor() {
        this.cars = []
    }
    produce(year) {
        for (let i = 0; i < Math.floor(Math.random() * 6); i++) {
            this.cars.push (
                new Agya("Dunlop", 15, "Agya", 5, 5, 3, year, 11111)
            );
        }
        for (let i = 0; i < Math.floor(Math.random() * 6); i ++) {
            this.cars.push (
                new Rush("Bridgestone", 17, "Rush", 5, 5, 1, year, 11111)
            );
        }
        
return this.cars
    }
}

//     guaranteeSimulation(simulationYear) {

//     }
// }

const toyota = new  CarFactory()
toyota.produce(2020)
toyota.produce(2022)
console.log(toyota)
// toyota.result()
// toyota.guaranteeSimulation(2025)
    