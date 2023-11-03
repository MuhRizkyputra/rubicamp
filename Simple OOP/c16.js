class Tyre {
    constructor(brand, size) {
        this.brand = brand // property
        this.size = size // property

    }
}
class Car extends Tyre {
    constructor(brand, size, varian, door, seat, warranty, year, sn) {
        super(brand, size)
        this.varian = varian;
        this.door = door;
        this.seat = seat;
        this.warranty = warranty;
        this.year = year;
        this.sn = sn;
    }
    static serialNumber() {
        let kata = " "
        let random = " "
        let nomorAcak = " "
        let kamus = "qwertyuiopasdfghjklzxcvbnm1234567890"
        for (let i = 0; i <= 36; i++) {
            random = Math.floor(Math.random() * kamus.length)
            kata = kamus[random]
            if (i == 8 || i == 13 || i == 18 || i == 23) {
                random = i
                kata = "-"

            }
            nomorAcak += kata

        }
        return nomorAcak
    }
}


class Rush extends Car { }
class Agya extends Car { }

class CarFactory {
    constructor() {
        this.Cars = []
    }
    produce(year) {
        for (let i = 0; i < Math.floor(Math.random() * 6); i++) {
            this.Cars.push(
                new Agya("Dunlop", 15, "Agya", 5, 5, 3, year, Car.serialNumber())
            );
        }
        for (let i = 0; i < Math.floor(Math.random() * 6); i++) {
            this.Cars.push(
                new Rush("Bridgestone", 17, "Rush", 5, 5, 1, year, Car.serialNumber())
            );
        }

        return this.cars
    }
    result() {
        console.log('Hasil Produksi :')
        let count = 1
        for (let mobil of this.Cars) {
            console.log(`
            no. ${count}
            varian      : ${mobil.varian}
            sn          : ${mobil.sn}
            door        : ${mobil.door}
            seat        : ${mobil.seat}
            tyre        : ${mobil.brand} ${mobil.size} inch
            year        : ${mobil.year}
            warranty    : ${mobil.warranty} year`
            )
            count++
        }
    }
    guaranteeSimulation(simulationYear) {
        console.log('Hasil hasil simulasi garansi semua mobil pada tahun 2025 :')
        let count = 1
        for (let mobil of this.Cars) {
            console.log(`
            no. ${count}
            varian      : ${mobil.varian}
            sn          : ${mobil.sn}
            door        : ${mobil.door}
            seat        : ${mobil.seat}
            tyre        : ${mobil.brand} ${mobil.size} inch
            year        : ${mobil.year}
            warranty    : ${mobil.warranty} year`
            )
            console.log(
                mobil.year = mobil.warranty >= simulationYear
                    ? `Status on ${simulationYear} this guarantee status is active`
                    : `Status on ${simulationYear} this guarantee status is expired` 
            )
            
         count++
        }

    }
}





const toyota = new CarFactory()
toyota.produce(2020)
toyota.produce(2022)
toyota.result()
toyota.guaranteeSimulation(2025)
